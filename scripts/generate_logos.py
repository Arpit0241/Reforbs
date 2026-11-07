import os
from PIL import Image, ImageOps

src_path = r'C:\Users\Admin\.gemini\antigravity\brain\e882bdc4-cb02-416c-8042-97b9982849a5\.user_uploaded\media_1794032542647_104ac07a.jpg'
img = Image.open(src_path).convert('RGB')

# 1. Update public/assets/reforbs-official-logo.jpg directly
img.save('public/assets/reforbs-official-logo.jpg', quality=95)

# 2. Find bounding box of logo content
gray = img.convert('L')
inv = ImageOps.invert(gray)
thresh = inv.point(lambda p: 255 if p > 15 else 0)
bbox = thresh.getbbox()
print("Logo content bbox:", bbox)

# Add comfortable padding around the logo
pad_x = 12
pad_y = 10
crop_box = (
    max(0, bbox[0] - pad_x),
    max(0, bbox[1] - pad_y),
    min(img.width, bbox[2] + pad_x),
    min(img.height, bbox[3] + pad_y)
)
cropped = img.crop(crop_box)
w, h = cropped.size
print(f"Cropped dimensions: {w}x{h}")

# Process RGBA images
official_rgba = Image.new('RGBA', (w, h), (0, 0, 0, 0))
white_rgba = Image.new('RGBA', (w, h), (0, 0, 0, 0))

for y in range(h):
    for x in range(w):
        r, g, b = cropped.getpixel((x, y))
        
        # Check if it's yellow heart pixel (r is high, g is high, b is low)
        is_yellow = (r > 180 and g > 150 and b < 170 and (r - b > 35 or g - b > 35))
        
        # Check if it's near-white background
        # Background is white when r,g,b are all high and difference between them is low
        min_c = min(r, g, b)
        max_c = max(r, g, b)
        diff_c = max_c - min_c
        
        if not is_yellow and min_c >= 242 and diff_c < 18:
            # Pure transparent background
            alpha = 0
        elif not is_yellow and min_c >= 225 and diff_c < 25:
            # Soft anti-aliased edge near white
            alpha = int((255 - min_c) / 30.0 * 255)
            alpha = max(0, min(255, alpha))
        else:
            alpha = 255

        if alpha > 0:
            # Official logo (Teal text + Yellow heart)
            # Normalize colors to avoid slight JPEG compression haze
            if is_yellow:
                # Vibrant warm yellow heart
                official_rgba.putpixel((x, y), (255, 215, 64, alpha))
                # In white version, keep the heart yellow!
                white_rgba.putpixel((x, y), (255, 222, 89, alpha))
            else:
                # Crisp teal for official logo
                # Clean up compression noise towards brand teal (#0097A7 / #007A7A)
                teal_r = min(r, 10)
                teal_g = int(g * 0.95)
                teal_b = int(b * 0.98)
                official_rgba.putpixel((x, y), (r, g, b, alpha))
                # For white version, make the text pure white
                white_rgba.putpixel((x, y), (255, 255, 255, alpha))

official_rgba.save('public/assets/reforbs-official-logo.png', 'PNG')
white_rgba.save('public/assets/reforbs-logo-white.png', 'PNG')
# Also save teal version
official_rgba.save('public/assets/reforbs-logo-teal.png', 'PNG')

print("Successfully generated:")
print(" - public/assets/reforbs-official-logo.png")
print(" - public/assets/reforbs-logo-white.png")
print(" - public/assets/reforbs-logo-teal.png")
print(" - public/assets/reforbs-official-logo.jpg")
