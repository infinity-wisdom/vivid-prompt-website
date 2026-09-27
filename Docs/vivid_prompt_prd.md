# **Product Requirements Document (PRD)**

## **Product Name**

Vivid Prompt

## **Document Status**

Draft — Product Definition

## **1\. Product Overview**

The Prompt Learning Platform is a guided learning and prompt-building website designed for **students, beginners, and administrators**.

The platform helps users move from unclear or incomplete prompts to stronger prompts by combining:

* A searchable and categorized prompt template library  
* A practical prompt builder  
* Guided questions for beginners  
* Prompt improvement and explanations  
* An interactive Prompt Coach  
* A personal Prompt Library  
* Short lessons, examples, and practice activities  
* The ability to copy prompts or open them in supported AI tools  
* Optional public sharing of prompts  
* An administration area for managing users and platform content

The initial product should focus on making prompt learning **practical, simple, and immediately useful** rather than presenting prompt engineering as a purely theoretical subject.

## **2\. Problem Statement**

Students and beginners often write prompts that are too vague, incomplete, or poorly structured. As a result, AI tools may return answers that are confusing, incomplete, inaccurate for the user's intended purpose, or different from what the user expected.

Many beginners also do not know:

* What information a good prompt should contain  
* How to give an AI tool useful context  
* How to describe the desired output  
* How to add constraints or requirements  
* How to improve a prompt they have already written  
* Why one prompt produces a better result than another

The product should solve this by turning prompt writing into a **guided, learn-by-doing experience**.

## **3\. Product Vision**

To become a beginner-friendly platform where anyone can learn how to communicate more effectively with AI by learning prompt-writing principles and applying them immediately through practical prompt-building tools.

## **4\. Product Goals**

### **Primary Goals**

1. Help beginners create clearer and more useful AI prompts.  
2. Teach users the principles behind effective prompting while they practice.  
3. Make prompt creation simple enough for users with little or no prior AI experience.  
4. Give users a reusable personal library of prompts.  
5. Provide administrators with control over users, templates, categories, lessons, and published content.  
6. Encourage users to return regularly by combining learning, practice, and reusable prompt assets.

### **Secondary Goals**

1. Build a foundation for AI-assisted prompt recommendations.  
2. Create a community-driven public prompt library in the future.  
3. Expand from prompt learning into a broader AI learning environment.  
4. Eventually support an integrated AI experience where users can run improved prompts without leaving the platform.

## **5\. Target Users**

### **5.1 Students**

Students can use the platform for schoolwork, research, writing, presentations, coding, study support, and other academic or personal tasks.

**Needs:**

* Easy-to-follow guidance  
* Useful templates  
* Practical examples  
* Ability to save and reuse prompts  
* Learning support without requiring advanced AI knowledge

### **5.2 Beginners**

Beginners include people who are new to AI tools or who struggle to get consistent results from them.

**Needs:**

* Simple explanations  
* Guided questions  
* Prompt improvement assistance  
* Examples of weak vs. improved prompts  
* Practical exercises

### **5.3 Administrators**

Administrators maintain the platform and its learning resources.

**Needs:**

* User management  
* Prompt template management  
* Lesson and learning-content management  
* Category management  
* Publishing controls  
* User access controls  
* Activity review

## **6\. Core Product Principles**

### **Learn by Doing**

Users should learn prompt-writing concepts while creating real prompts rather than only reading theory.

### **Beginner First**

The interface and language should be understandable to someone who has never studied prompt engineering.

### **Guided, Not Overwhelming**

The platform should ask for useful information progressively rather than presenting users with an intimidating form.

### **Explain the Improvement**

When the platform improves a prompt, users should understand what changed and why.

### **Flexible Usage**

Users should be able to take their finished prompt to the AI tool of their choice rather than being locked into one AI service.

### **Private by Default**

Saved prompts should remain private unless the user deliberately chooses to make a prompt public.

## **7\. Core User Journey**

The primary learner journey is:

**Discover → Choose Template → Add Details → Improve Prompt → Understand Improvements → Copy/Open in AI Tool → Save/Revisit**

### **Detailed Journey**

1. User lands on the website.  
2. User explores prompt categories or searches for a specific task.  
3. User selects a prompt template.  
4. User chooses either a quick form or guided-question experience.  
5. User provides their own details.  
6. The platform creates or improves the prompt.  
7. The platform explains the key improvements.  
8. User copies the prompt or opens it in a supported AI tool.  
9. User may save the prompt to their personal Prompt Library.  
10. User can return later to edit, duplicate, reuse, or delete saved prompts.

## **8\. Guest and Account Experience**

### **Guest Users**

Guests should be able to:

* Explore prompt categories  
* Search for templates  
* Select a template  
* Build and improve prompts  
* Use the Prompt Coach in the available guest experience  
* Copy prompts  
* Open prompts in supported AI tools  
* Explore learning content available to guests

### **Registered Users**

Accounts should unlock personalized capabilities such as:

* Personal Prompt Library  
* Saved prompts  
* Prompt organization  
* Reuse and editing of previous prompts  
* Learning progress  
* Personalized onboarding information  
* Additional account-level experiences introduced later

### **Onboarding**

After signup, users should complete a **short onboarding process** focused on their main goal or intended use of AI.

Example interests may include:

* Education  
* Writing  
* Coding  
* Business  
* Marketing  
* Research  
* Content creation  
* General AI use

The onboarding should be brief and should help the platform surface relevant templates and learning content.

## **9\. Feature Requirements**

## **9.1 Prompt Discovery**

The platform should provide two primary ways to find a prompt.

### **Browse by Category**

Users can browse categories such as:

* Education  
* Writing  
* Coding  
* Business  
* Marketing  
* Research  
* Content Creation  
* Image Generation  
* Other AI use cases

Categories should be flexible and manageable by administrators.

### **Search**

Users should be able to search using natural task descriptions, such as:

> “Help me create a business plan.”

> “Write a study timetable.”

> “Create a social media content plan.”

Search should help users find relevant templates without requiring them to know technical prompt-engineering terms.

### **Future Enhancement: AI Recommendation**

A later version may ask users a few questions about what they want to achieve and recommend suitable templates automatically.

## **9.2 Prompt Template System**

Prompt templates are structured starting points that users customize for their own needs.

Each template should provide:

* A clear title  
* A simple description of what it helps the user accomplish  
* A category  
* An example use case  
* Relevant fields or questions for customization  
* A starting prompt structure  
* Optional learning tips associated with the template

Templates should be written for beginners and should not assume prior knowledge of prompt engineering.

## **9.3 Prompt Builder**

Users should have two ways to customize a template.

### **Quick Form Mode**

A structured form collects key details such as:

* Goal or task  
* Topic  
* Audience  
* Tone  
* Context  
* Desired result  
* Constraints or requirements  
* Output format

The exact fields should depend on the template.

### **Guided Question Mode**

The platform asks simple questions one at a time and uses the user's answers to build a stronger prompt.

The questions should feel conversational and should explain unfamiliar concepts in plain language.

Users should be able to move back and adjust earlier answers before finalizing their prompt.

## **9.4 Prompt Improvement**

After the user provides their information, the platform should produce an improved prompt.

The improved prompt should aim to make the user's intent clearer by improving areas such as:

* Clarity  
* Context  
* Specificity  
* Instructions  
* Constraints  
* Desired output

The product should avoid presenting the improved prompt as a mysterious or unexplained result.

## **9.5 Improvement Explanation**

Alongside the improved prompt, the platform should briefly explain the important changes.

For example:

* Added the target audience so the response can be better tailored.  
* Added a desired output format to make the expected result clearer.  
* Added context to reduce ambiguity.  
* Added constraints to guide the AI toward the user's requirements.

The explanation should teach the user without becoming unnecessarily technical.

## **9.6 Interactive Prompt Coach**

The Prompt Coach should help users improve prompts they write themselves, even when they do not start from a template.

The coach should be able to:

1. Review the user's prompt.  
2. Identify important missing information or unclear instructions.  
3. Explain the issue in simple language.  
4. Ask useful follow-up questions.  
5. Help the user improve the prompt step by step.  
6. Produce a stronger version of the prompt.

Example:

**User prompt:**

> “Write something about business.”

**Coach:**

> “What kind of business content do you need, and who is it for?”

### **Future Enhancement: Prompt Score**

A later version may provide a quality score based on dimensions such as clarity, context, specificity, constraints, and output format.

The score should be treated as a learning aid rather than the main purpose of the platform.

## **9.7 Prompt Usage**

After generating a finished prompt, users should be able to:

### **Copy Prompt**

A prominent action should allow the user to copy the completed prompt for use elsewhere.

### **Open in Supported AI Tool**

Users should have convenient options for opening the prompt in supported AI tools where appropriate.

### **Future Enhancement: Run Prompt Inside Platform**

A future version may allow users to execute their prompt directly inside the platform and receive the AI result without leaving the website.

## **9.8 Personal Prompt Library**

Registered users should have a personal Prompt Library.

Users should be able to:

* Save prompts  
* View saved prompts  
* Rename prompts  
* Edit prompts  
* Duplicate prompts  
* Reuse prompts  
* Organize prompts into folders or categories  
* Delete prompts

Prompts should be private by default.

## **9.9 Public Prompt Sharing**

Users should be able to choose whether an individual prompt remains private or is shared publicly.

### **Private**

The prompt remains visible only within the user's personal library.

### **Public**

The user deliberately publishes the prompt so other users can discover and use it.

Public sharing should eventually support appropriate review and moderation by administrators.

### **Future Enhancement: Community Prompt Library**

A later version may expand public sharing into a community experience with features such as discovery, reuse, feedback, ratings, or contributor recognition.

## **9.10 Learning Content**

The learning experience should follow a **Learn → See → Practice** model.

### **Short Lessons**

Lessons should explain practical prompt-writing concepts, including:

* Context  
* Role or perspective  
* Clear instructions  
* Examples  
* Constraints  
* Desired output format  
* Specificity

### **Examples**

Each concept should include practical examples, preferably showing:

* A weak or unclear prompt  
* An improved prompt  
* A simple explanation of the difference

### **Practice**

Users should be able to apply each concept by writing or improving prompts.

### **Future Enhancement: Complete Learning Path**

A later version may introduce:

* Structured courses  
* Modules  
* Exercises  
* Quizzes  
* Progress milestones  
* Completion recognition  
* Certification

## **9.11 Admin Management**

The initial administrator experience should focus on content and user management.

Admins should be able to:

### **Manage Users**

* View users  
* Review basic account information  
* Manage access  
* Take appropriate administrative actions on accounts

### **Manage Prompt Templates**

* Create templates  
* Edit templates  
* Organize templates by category  
* Publish or unpublish templates  
* Feature selected templates

### **Manage Learning Content**

* Create lessons  
* Edit lessons  
* Manage examples  
* Manage practice activities  
* Publish or unpublish content

### **Manage Categories**

* Create categories  
* Edit categories  
* Organize templates and learning content under categories

### **Review User Activity**

Admins should have enough visibility to understand general use of the platform and identify content or user issues that require attention.

### **Future Enhancements**

As the platform grows, admin capabilities may expand to include:

* Analytics dashboards  
* Detailed reports  
* Announcements  
* Platform-wide settings  
* Feedback management  
* More advanced moderation  
* Multiple admin roles

## **10\. Navigation and Main Areas**

The product should be organized around a small number of clear user-facing areas.

### **Public / Guest Areas**

* Home  
* Explore Templates  
* Search  
* Prompt Builder  
* Prompt Coach  
* Learn  
* Login / Sign Up

### **Registered User Areas**

* Dashboard  
* Explore Templates  
* Prompt Builder  
* Prompt Coach  
* Learn  
* My Prompt Library  
* Learning Progress  
* Profile / Account

### **Admin Areas**

* Admin Dashboard  
* Users  
* Prompt Templates  
* Categories  
* Lessons / Learning Content  
* Published Content  
* Activity / Review

## **11\. Dashboard Concept**

### **Learner Dashboard**

The dashboard should help users quickly continue where they left off.

Potential sections include:

* Continue learning  
* Start a new prompt  
* Recently created prompts  
* Saved prompts  
* Recommended templates based on onboarding  
* Recent learning activity

### **Admin Dashboard**

The initial dashboard should provide a high-level view of:

* Users  
* Templates  
* Learning content  
* Recently updated content  
* Items requiring administrative attention

More advanced analytics can be introduced later.

## **12\. Content Strategy**

The quality of the platform will depend heavily on the quality of its templates and educational content.

Initial content should prioritize common beginner use cases, such as:

### **Education**

* Study plans  
* Topic explanations  
* Revision questions  
* Summaries  
* Essay planning

### **Writing**

* Article writing  
* Editing  
* Rewriting  
* Brainstorming  
* Outlining

### **Coding**

* Explaining code  
* Debugging guidance  
* Code generation prompts  
* Learning programming concepts

### **Business**

* Business ideas  
* Business plans  
* Customer research  
* Marketing plans  
* Product descriptions

### **Content Creation**

* Social media posts  
* Video ideas  
* Scripts  
* Captions  
* Content calendars

### **Research**

* Research questions  
* Literature exploration  
* Comparison prompts  
* Information organization

The categories should expand based on actual user needs and usage patterns.

## **13\. User Stories**

### **Students / Beginners**

* As a beginner, I want to browse prompt categories so I can find a useful starting point.  
* As a beginner, I want to search for a task in everyday language so I do not need to know prompt-engineering terms.  
* As a beginner, I want to choose a template so I do not have to start from a blank page.  
* As a beginner, I want to answer simple questions so I know what information to provide.  
* As a learner, I want to see an improved prompt so I can use a clearer version.  
* As a learner, I want to know why my prompt was improved so I can learn from it.  
* As a learner, I want coaching on my own prompts so I can improve without always using a template.  
* As a user, I want to copy my finished prompt so I can use it in my preferred AI tool.  
* As a user, I want to save prompts so I can reuse them later.  
* As a user, I want to organize my saved prompts so I can find them easily.  
* As a user, I want my prompts to remain private unless I choose to share them.  
* As a user, I want to publish selected prompts so other people can benefit from them.  
* As a learner, I want practical lessons and exercises so I can build my prompting skills.

### **Administrators**

* As an admin, I want to manage users so I can maintain a healthy platform.  
* As an admin, I want to create and edit templates so learners always have useful starting points.  
* As an admin, I want to organize content into categories so users can discover it easily.  
* As an admin, I want to publish or unpublish content so the public platform stays current.  
* As an admin, I want to manage lessons and practice activities so I can improve the educational experience.  
* As an admin, I want to review activity so I can identify issues and improve the platform.

## **14\. MVP Scope**

The first release should focus on the smallest complete experience that delivers the product's central promise.

### **MVP Includes**

* Guest access  
* Account creation and login  
* Simple onboarding  
* Prompt category browsing  
* Prompt search  
* Prompt templates  
* Quick form prompt builder  
* Guided question prompt builder  
* Prompt improvement  
* Improvement explanations  
* Interactive Prompt Coach  
* Copy prompt  
* Open in supported AI tools  
* Personal Prompt Library  
* Prompt organization  
* Private prompts by default  
* Optional public prompt sharing  
* Short lessons  
* Examples  
* Practice activities  
* Basic learner dashboard  
* Admin user management  
* Admin template management  
* Admin category management  
* Admin lesson/content management  
* Publishing controls  
* Basic activity review

## **15\. Post-MVP Expansion**

Features intended for later versions include:

### **Intelligent Discovery**

* AI-powered prompt recommendations

### **Deeper Learning**

* Full structured course paths  
* Quizzes  
* Progress milestones  
* Certification

### **Advanced Prompt Evaluation**

* Prompt quality scoring  
* More detailed prompt analysis

### **Integrated AI Workspace**

* Run prompts directly inside the platform  
* View AI responses within the learning experience

### **Community**

* Expanded public prompt library  
* Community discovery  
* Feedback and ratings  
* Contributor recognition or rewards

### **Advanced Administration**

* Analytics dashboards  
* Detailed reports  
* Announcements  
* Feedback management  
* Platform-wide settings  
* Multiple administrator roles

## **16\. Success Indicators**

The product should be evaluated using measures that reflect learning and usefulness rather than activity alone.

Potential indicators include:

* Percentage of users who successfully create an improved prompt  
* Percentage of new users who complete onboarding  
* Number of prompts created per active learner  
* Number of prompts saved to personal libraries  
* Repeat use of saved prompts  
* Completion of lessons and practice activities  
* Use of the Prompt Coach  
* Number of users who return after their first session  
* Percentage of publicly shared prompts  
* Template usage by category  
* User feedback on whether prompts became clearer or more useful

Later versions can introduce deeper learning and community metrics.

## **17\. Key Product Decisions**

| Area | Decision |
| ----- | ----- |
| Learning model | Practical prompt building \+ learning |
| Template discovery | Browse \+ Search |
| AI template recommendation | Future enhancement |
| Prompt customization | Quick Form \+ Guided Questions |
| Prompt improvement | Improved prompt \+ explanation |
| Prompt quality score | Future enhancement |
| Prompt coaching | Interactive Prompt Coach |
| Prompt execution | Copy \+ Open in supported AI tools |
| In-platform AI execution | Future enhancement |
| Prompt history | Personal Prompt Library |
| Learning content | Lessons \+ Examples \+ Practice |
| Full course/certification | Future enhancement |
| Access model | Guest \+ Account |
| Onboarding | Simple onboarding |
| Admin management | Content \+ User Management |
| Advanced analytics/admin roles | Future enhancement |
| Prompt sharing | Private \+ Optional Public Sharing |
| Community prompt marketplace | Future enhancement |

## **18\. Product Experience Summary**

The product should feel like a **friendly AI prompting coach and practice environment**, not simply a database of prompt templates.

A beginner should be able to arrive with a vague idea, find a relevant template or describe their goal, answer a few simple questions, receive a stronger prompt, understand why it is better, and immediately use or save it.

Over time, the platform should help that same beginner become less dependent on templates by teaching them how to write and improve prompts independently.

## **19\. Future Product Direction**

The long-term product can evolve through four broad stages:

**Stage 1 — Prompt Builder:** Help users create better prompts quickly.

**Stage 2 — Prompt Learning Platform:** Teach users why effective prompts work through lessons, examples, coaching, and practice.

**Stage 3 — Prompt Community:** Allow users to discover, share, and learn from prompts created by others.

**Stage 4 — AI Workspace:** Combine prompt learning, prompt creation, and AI execution in one environment.

The central product promise should remain consistent throughout these stages: **help people communicate more effectively with AI and learn to do it themselves.**

