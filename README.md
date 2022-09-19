# Transcription

Submission for Pharmahacks March 2022 (original repo on GitLab). Submission video on [Devpost](https://devpost.com/software/transcription).

# Inspiration

When thinking about the current system in place regarding prescriptions, we were brought to think of our grandparents, and how sometimes they struggle with independence in their medical lives, largely attributed to their language barrier. A simple current solution for reading prescriptions would be to translate the label using google translate or a similar platform, or rely on family members to give them the verbal translations. Both of these commonly practiced solutions leave room for error and possibly mistaken doses for the patients. We wanted to create an easier way for patients to receive the important instructions they need to properly use the medication as prescribed. Ensuring this information is properly translated means working to support all patients in receiving the safe care they require!

# What it does

Transcription provides an easy way to communicate important instructions regarding prescriptions, despite the presence of language barriers. The application is designed to be used by pharmacists, and provides an easy and standardized way for prescriptions to be translated without changing the label. By providing multi-choice select options for the pharmacist, the application can ensure that all translations are error free, as they have been pre-translated and built into the application with the help of fluent-speaking individuals in each language. The pharmacist will select all the instructions according to the prescription they are filling, print a QR code, and put it on the bottle for the patient to use with ease. For instance the pharmacist may select the following options:

2 tablets every 2 hours

And the QR code would then display:

→ 2 compresse ogni 2 ore (italian) OR → 2 Viên thuốc cứ sau 2 giờ (Vietnamese)

When the patient scans their personal QR code, they can select their language of choice, and will receive all the relevant information they need regarding their medication, properly translated.

# How we built it

For frontend, we used HTML, CSS, JavaScript with BootStrap to style the webpage and Figma to create a design prototype. For backend, we used Node.js with Express framework, TypeScript and NeDB.

At this point, we have 2 languages fully translated, and one underway. We have begun with Italian and Vietnamese and have had two fluent speakers confirm translations and provide critiques. We analyzed common labels to create a list of likely phrases and commonly displayed information that would need to be expressed, and therefore translated.

# Challenges we ran into

One of the largest challenges was that there are no databases easily accessible with common pharmaceutical/prescription phrases translated into many languages. For this reason, we personally had to find experts who could assist us in the start of the development, and provide some accuracy to our translations. We also struggled learning how to save information sent over HTTP requests to a database. We are still working to refine the code, but we were successfully able to work together to overcome the many errors along the way.

# What we learned

While some members of the team are well versed in web development, other members were completely new, and were learning as they coded. The team was introduced to new frameworks like Bootstrap, and were able to use them to make the prescription display. Members who were familiar with frontend took a leap to begin learning the basics of backend, and were able to learn how to use databases and express along the way.

# What's next for Transcription

Going forward, more work needs to be done to refine the choices for the pharmacist to ensure that they can accurately express the proper instructions. Since the pharmacist cannot input their own information (with the exception of numbers), if the option they are looking for is not available, then the application will serve no purpose as the information entered would be incorrect and could be lethal. We have started with the most common phrases, but would like to expand to cover all bases, and ensure maximum utility. The same goes for the language use; going forward we want to work with people of different languages to get the proper translations for many diverse languages.
