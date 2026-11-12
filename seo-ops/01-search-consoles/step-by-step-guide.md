# Google Search Console & Bing Webmaster Setup Playbook for Reforbs Living

> **Protocol Notice**: As per Rule 1 (Human Checkpoints), Antigravity will never ask for or enter your DNS or Google credentials. Follow these clear, step-by-step actions below.

---

## 1. Google Search Console: Domain Property Setup

### Step 1: Open Google Search Console
1. Navigate to: `https://search.google.com/search-console/welcome`
2. Sign in with your primary company Google account (e.g. `hello@reforbs.com` or `reforbsar@gmail.com`).

### Step 2: Select "Domain" Property Type (Not URL Prefix)
- **What you will see:** A modal titled *"Select property type"* with two boxes: **Domain** (left) and **URL prefix** (right).
- **Action:** In the left box (**Domain**), enter:
  ```text
  reforbs.com
  ```
  *(Do not add `https://` or `www` — enter bare domain `reforbs.com`)*.
- Click **Continue**.

### Step 3: Copy the DNS TXT Verification Record
- **What you will see:** A popup titled *"Verify domain ownership via DNS record"*.
- It displays an instruction: *"1. Copy the TXT record below into the DNS configuration for reforbs.com"*.
- **Action:** Click the **COPY** button next to the long string that looks like:
  ```text
  google-site-verification=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  ```

### Step 4: Add the TXT Record in your DNS Registrar (GoDaddy / Cloudflare / Namecheap)
1. Open your DNS management dashboard for `reforbs.com`.
2. Click **Add Record**:
   - **Type:** `TXT`
   - **Name / Host:** `@` (or leave blank if your registrar doesn't accept `@`)
   - **Value / Content:** Paste the `google-site-verification=...` string you copied.
   - **TTL:** `Automatic` or `300 seconds` (5 minutes).
3. Click **Save**.

### Step 5: Verify in Google Search Console
1. Return to the Google Search Console tab.
2. Click **VERIFY** at the bottom right.
   - *Note on DNS propagation:* It usually verifies within 1-5 minutes. If it displays *"Ownership verification failed"*, wait 3 minutes and click **VERIFY** again.
3. Once verified, you will see a green checkmark modal: *"Ownership verified"*. Click **GO TO PROPERTY**.

---

## 2. Submit Production Sitemap in GSC

1. In the left navigation menu of Google Search Console, under **Indexing**, click **Sitemaps**.
2. Under **"Add a new sitemap"**, you will see your domain prefix `https://reforbs.com/`.
3. In the input box, type:
   ```text
   sitemap.xml
   ```
4. Click **SUBMIT**.
5. **Expected result:**
   - Status column shows green: **"Success"**.
   - Discovered pages shows approx. **25 URLs**.

---

## 3. Priority URL Inspection & Request Indexing

Google crawls new domains faster when key routes are requested individually:
1. In the top search bar ("Inspect any URL in 'reforbs.com'"), paste each priority URL from `priority-indexing-urls.txt`:
   ```text
   https://reforbs.com/
   ```
2. Press **Enter**.
3. It will retrieve data from Google Index. Click **REQUEST INDEXING** (top right button).
4. Wait 15-30 seconds until the modal confirms: *"Indexing requested"*. Click **Got it**.
5. Repeat for the top 10 URLs in `priority-indexing-urls.txt`:
   - `https://reforbs.com/coliving`
   - `https://reforbs.com/student-housing`
   - `https://reforbs.com/properties`
   - `https://reforbs.com/coliving/nirvana`
   - `https://reforbs.com/coliving/moksha`
   - `https://reforbs.com/coliving/vipasna`
   - `https://reforbs.com/student-housing/shubh-gateway`
   - `https://reforbs.com/student-housing/brindavan`
   - `https://reforbs.com/student-housing/vairagya`

---

## 4. Bing Webmaster Tools & IndexNow Activation

1. Navigate to: `https://www.bing.com/webmasters`
2. Sign in with your Google account.
3. On the welcome screen, choose **"Import your sites from GSC"** (Click **Import** under Google Search Console).
4. Authorize Bing to read your GSC account, select `reforbs.com`, and click **Import**.
5. Once imported:
   - Go to **Sitemaps** on Bing Webmaster Tools > Submit `https://reforbs.com/sitemap.xml`.
   - Go to **IndexNow** on the left menu.
   - Click **Get Started** or **Generate API Key**. Copy the generated key.
   - Add this key to your Vercel Project Environment Variables as `INDEXNOW_KEY` so our automated API route (`/api/indexnow`) can push instant index updates to Bing whenever content is published.
