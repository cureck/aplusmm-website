# A+ Mobile Mechanic LLC - Website

Professional single-page website for A+ Mobile Mechanic LLC, a mobile auto repair business based in Temple, GA.

## Features

- Modern, clean, responsive single-page design
- - Mobile-friendly navigation with hamburger menu
  - - Hero section with call-to-action buttons
    - - About section highlighting key business features
      - - Services grid showcasing all offered services
        - - Customer reviews from Facebook
          - - Contact form for scheduling appointments
            - - Smooth scroll animations
              - - Color scheme matching the business logo (red, green, silver)
               
                - ## Setup
               
                - ### Hosting with GitHub Pages
               
                - 1. Go to **Settings** > **Pages** in this repository
                  2. 2. Under "Source", select **main** branch
                     3. 3. Click **Save**
                        4. 4. Your site will be live at `https://cureck.github.io/aplusmm-website/`
                          
                           5. ### Configuring the Contact Form (Email Notifications)
                          
                           6. The contact form uses [Formspree](https://formspree.io) to send email notifications:
                          
                           7. 1. Go to [https://formspree.io](https://formspree.io) and create a free account
                              2. 2. Create a new form - use `aplusmobilemechanic1@gmail.com` as the recipient
                                 3. 3. Copy your form endpoint ID (e.g., `xpznqkdl`)
                                    4. 4. Open `index.html` and find this line:
                                       5.    ```html
                                                action="https://formspree.io/f/YOUR_FORM_ID"
                                                ```
                                             5. Replace `YOUR_FORM_ID` with your actual form ID:
                                             6.    ```html
                                                      action="https://formspree.io/f/xpznqkdl"
                                                      ```
                                                   6. Commit the change - form submissions will now email the business owner
                                               
                                                   7. ## Files
                                               
                                                   8. - `index.html` - Main HTML file with all page content
                                                      - - `styles.css` - All styles including responsive design
                                                        - - `script.js` - Navigation, animations, and form handling
                                                          - - `logo.png` - Business logo
                                                           
                                                            - ## Contact Info
                                                           
                                                            - - **Phone:** (678) 852-1436
                                                              - - **Email:** aplusmobilemechanic1@gmail.com
                                                                - - **Location:** Temple, GA 30179
                                                                  - - **Facebook:** [A Plus Mobile Mechanic LLC](https://www.facebook.com/profile.php?id=61553558503981)
