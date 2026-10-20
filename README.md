# AGM voting

| Page | Who uses it |
|---|---|
| `index.html` | Members' phones (the QR code points here) |
| `display.html` | The projector / big screen |
| `host.html` | The main laptop: candidates, open/close voting, announce winner, private tally |
| `admin.html` | Admin account: proxy votes (only the host can see them in the tally) |

**Never upload `codes.txt` or `codes-print.html` to GitHub.** The repo is public.

## 1. Firebase (database + logins)
1. Go to https://console.firebase.google.com → Add project (Analytics can be off).
2. Build → **Firestore Database** → Create database → production mode → location `australia-southeast1`.
3. Build → **Authentication** → Get started → enable **Email/Password**.
   - Users tab → Add user twice: one host account, one admin account.
   - Copy each account's **User UID**.
   - Settings → User actions → untick "Enable create (sign-up)" so nobody else can make accounts.
4. Firestore → **Rules** tab → paste `firestore.rules`, replace `HOST_UID_HERE` and `ADMIN_UID_HERE` with the UIDs → Publish.
5. Project settings (gear) → Your apps → Web (`</>`) → register → copy the `firebaseConfig` values into `firebase-config.js`.

## 2. GitHub Pages
1. github.com → New repository → name it e.g. `agm-voting` → Public → Create.
2. "uploading an existing file" → drag in every file in this folder → Commit.
3. Settings → Pages → Source: Deploy from a branch → `main` / `(root)` → Save.
4. After a minute the site is at `https://YOUR-USERNAME.github.io/agm-voting/`.
5. Firebase → Authentication → Settings → Authorized domains → add `YOUR-USERNAME.github.io`.

## 3. Load the codes (once)
Open `host.html`, sign in as host, expand "One-time setup", choose `codes.txt`, press Load codes.

## On the day
- Laptop on **extended** display (Windows+P → Extend). Open `host.html` on the laptop, press "Open big-screen window", drag it to the projector, press Full screen.
- Per position: type the position name, add candidates → Open voting → Close voting → Next: announce winner → Start next position.
- Each code gets one vote per position, so members keep the same code all meeting.
