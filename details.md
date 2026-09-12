
Saraswati Vidya Mandir — School Website Project Brief

1. Project Overview

This is a frontend-only school website for U.N.S Saraswati Vidya Mandir, Sangat, Phulwari Shree, Patna- 801505

The website should present the school as a warm, traditional, value-based and modern educational institution. It should communicate the school's educational philosophy, Indian cultural values, academics, facilities, gallery, admission information and contact details through a polished, responsive UI.

There is currently no backend. Focus on frontend UI, responsive layouts, reusable components and client-side interactions only.

2. Website Navigation

The approved navigation contains 7 main items:

Home

About

Academics

Facilities

Gallery

Admission

Contact

Keep this navigation consistent throughout the website. Do not add, remove or rename navigation items unless explicitly instructed.

3. Team Structure

This is a collaborative project between two developers.

Colleague

Home
About
Academics

Me

Facilities
Gallery
Admission
Contact

Because different developers are implementing different pages, visual and code consistency is extremely important.

4. Core Design Philosophy
     The website should communicate:
      Knowledge
      Values
      Character
     Indian culture
     Discipline
     Holistic development
     Academic excellence
    Strong moral foundation
    Student growth
    Parent-school partnership
    Community
    A brighter future
The visual style should feel:
Traditional but not outdated
Premium but not overly corporate
Warm and welcoming
Educational
Elegant
Indian/cultural
Trustworthy
Child-friendly
Sophisticated
The design should balance modern web design with Indian cultural identity.

5. Visual Identity

The supplied Home page designs establish the visual direction for the entire website.

Main palette

The dominant palette consists of:

Deep maroon / burgundy

Warm Indian gold

Cream

Off-white

Warm beige

Dark charcoal/gray for body text

Maroon is primarily used for:

Main headings

Primary buttons

Important highlights

Active navigation

Strong visual accents

Gold is primarily used for:

Decorative lines

Icons

Small labels

Highlights

Cultural motifs

Secondary accents

Cream/off-white should form the majority of page backgrounds.

6. Typography

Headings

Use an elegant serif style for major headings.

Headings should feel:

Traditional

Editorial

Premium

Educational

Large headings are generally dark maroon, with occasional gold emphasis.

Body

Use a clean, readable sans-serif style for body content.

Body text should be:

Comfortable to read

Moderately sized

Well spaced

Dark gray rather than pure black

Avoid excessive decorative fonts.

7. Cultural and School Design Language

The designs communicate an Indian educational identity through subtle elements such as:

Saraswati imagery

Lotus motifs

Sanskrit/Hindi phrases

Gold ornamental lines

Traditional Indian visual details

Maroon and gold combinations

Indian cultural references

Student uniforms and school imagery

Themes around values and character

Cultural elements should remain elegant and subtle. Do not overload every section with decoration.

The result should feel like a modern school website rooted in Indian values rather than an overly ornamental or generic corporate website.

8. Educational Philosophy

The designs present education as more than academic achievement.

Knowledge

Students develop understanding, curiosity and strong academic foundations.

Values

Education is connected with Indian values, culture, discipline and responsibility.

Character

The objective is to develop responsible, compassionate and confident human beings.

Holistic Development

The design emphasizes:

Creativity

Communication

Sports

Yoga

Cultural activities

Social development

Emotional development

Practical learning

Parent Partnership

The school is presented as working together with parents for the child's development.

Future Orientation

Education is connected with creating a better and brighter tomorrow.

9. Panchapadi Teaching Method

The supplied design presents a Panchapadi Teaching Method with five stages:

Adhiti — Attentive Listening

Bodh — Comprehension

Abhyas — Practice

Prasar — Sharing

Pravachan — Application

When this content appears on a relevant page, preserve its educational meaning and visual hierarchy.

10. Overall UI Style

Use:

Spacious layouts

Large editorial headings

Rounded cards

Soft shadows

Thin gold decorative borders/lines

Maroon primary CTAs

Gold secondary accents

Cream/off-white backgrounds

Large school/student photography

Rounded image containers

Subtle decorative motifs

Clear visual hierarchy

Avoid:

Neon/very bright colors

Generic dashboard styling

Heavy glassmorphism

Excessive gradients

Excessive animation

Random colors

Inconsistent card styles

Unnecessary UI elements

11. Section Design

Sections should generally have generous vertical spacing.

A common hierarchy is:

Small cultural/eyebrow label

Main heading

Supporting description

Main visual/content area

CTA or supporting information where appropriate

Not every section needs all five elements.

Maintain comfortable whitespace instead of filling every available area.

12. Buttons

Primary CTAs should generally use:

Deep maroon background

White text

Rounded corners

Comfortable horizontal padding

Medium/semibold text

Small arrow/directional icon where shown in the design

Examples:

Apply for Admission

Explore Our School

Discover Our Story

Explore Our Philosophy

View Curriculum

Enquire Now

Do not create new button designs for individual pages when an existing reusable button can be used.

13. Cards

Cards should follow the established visual language:

Warm/off-white background

Subtle border

Soft shadow where appropriate

Rounded corners

Comfortable internal padding

Maroon headings

Gray body text

Gold or soft-colored icon backgrounds

Different soft accent backgrounds may be used where the reference design specifically shows them.

14. Images

Photography is an important part of the visual identity.

Preferred imagery includes:

Students

Teachers

School environment

Classrooms

Activities

Parents

Indian cultural/educational settings

Use:

Appropriate aspect ratios

Rounded corners where shown

Clean cropping

High-quality assets

If supplied image assets exist in the project, use them instead of random stock images.

Do not invent or generate replacement visual content unless explicitly instructed.

15. Navbar

The navbar must remain consistent across pages.

It should maintain:

School logo/branding

School name

Navigation links

Active-page indication

Admission CTA where included in the approved design

Consistent spacing

Responsive mobile navigation

Do not create a different navbar for individual pages.

16. Responsive Design

The website must work on:

Large desktop

Desktop/laptop

Tablet

Mobile

Responsive behavior should preserve the visual hierarchy.

On smaller screens:

Multi-column layouts may stack

Navigation may become a mobile menu

Typography should scale appropriately

Images should remain balanced

Cards should adapt to available width

Buttons should remain usable

Horizontal overflow must be avoided

Do not simply shrink the desktop design. Reflow the layout intelligently while preserving the reference design.

17. Shared Design System

The project contains a central:

variables.css

This file is the single source of truth for shared design tokens.

It contains common values for:

Brand colors

Background colors

Text colors

Typography

Font sizes

Font weights

Spacing

Container widths

Border radius

Shadows

Buttons

Cards

Navbar

Form fields

Transitions

Breakpoint references

Rules

Do not create another variables.css.

Do not create duplicate global design tokens.

When a value already exists in variables.css, use it.

Example:

color: var(--color-primary);
padding: var(--space-6);
border-radius: var(--radius-lg);

Do not repeatedly hardcode the same values.

18. Component Reusability

Reuse genuinely common components, such as:

Navbar

Footer

Container

SectionHeading

PrimaryButton

SecondaryButton

Card

IconWrapper

ImageCard

If a component is common to multiple pages, do not recreate it separately on every page.

Do not over-engineer components that are only used once without a good reason.

19. Page-Specific CSS

Common design values belong in:

variables.css

Global/reset styles belong in the global stylesheet.

Page-specific styling should remain with the page/component that uses it.

Example:

Facilities/
├── Facilities.jsx
└── Facilities.css

Facilities-specific CSS should contain Facilities layout rules, while common colors, spacing, radius and typography should come from the shared design system.

20. MOST IMPORTANT — Design Implementation Rules

When a page design/screenshot is supplied, the design is the source of truth.

Antigravity's job is to implement the provided design in code, not redesign it.

For every supplied design:

Inspect the existing project first.

Inspect existing reusable components.

Inspect variables.css.

Reuse existing components whenever possible.

Implement the supplied design faithfully.

Match visual hierarchy.

Match spacing and alignment.

Match typography.

Match colors.

Match image positioning/cropping.

Match buttons and cards.

Make the implementation responsive.

Do not modify unrelated pages.

Do not create duplicate global styles.

Do not install unnecessary packages.

Do not replace supplied assets with random assets.

Do not change the approved design without instruction.

21. Page Implementation Workflow

For each page:

Step 1 — Design

A page design/screenshot is provided.

Step 2 — Inspect

Understand its:

Layout

Sections

Images

Typography

Components

Spacing

Colors

Responsive requirements

Step 3 — Implement

Write the required React/HTML and CSS.

Step 4 — Reuse

Reuse existing:

Navbar

Footer

Buttons

Cards

Containers

Section headings

Design variables

Step 5 — Test

Run the website and compare the implementation with the supplied design.

Step 6 — Correct

Fix:

Alignment

Spacing

Typography

Image dimensions

Card dimensions

Button dimensions

Section heights

Responsive behavior

Step 7 — Stop

Do not make unrelated changes to other developers' pages.

22. Collaboration Rules

Because two developers are working on the same codebase:

Do not overwrite another developer's work.

Do not unnecessarily modify files owned by the other developer.

Do not rename shared files without agreement.

Do not duplicate shared components.

Keep commits focused.

Push completed work regularly.

Resolve Git conflicts carefully rather than blindly overwriting changes.

The common design system should be shared by both developers.

23. Code Quality

The implementation should be:

Clean

Readable

Maintainable

Responsive

Component-based

Reusable where appropriate

Consistent with the existing project structure

Avoid unnecessary complexity. This is a frontend school website, so prefer simple and understandable solutions.

24. Design Reference

The supplied Home page designs establish the visual language for the rest of the website.

The Home page demonstrates:

Maroon/gold/cream palette

Serif display headings

Clean body typography

Indian cultural motifs

Student-focused imagery

Rounded cards

Maroon CTA buttons

Gold decorative accents

Generous whitespace

Educational/value-based messaging

Premium but warm presentation

All future page designs should feel like they belong to this same visual system.

25. FINAL INSTRUCTION TO ANTIGRAVITY

When a design image is supplied:

IMPLEMENT THE DESIGN FAITHFULLY. DO NOT REDESIGN IT.

Use the existing project architecture and shared variables.css.

The design image determines:

Layout

Visual hierarchy

Content placement

Spacing

Images

Colors

Typography

Component appearance

The existing codebase determines:

Framework

Project structure

Reusable components

Existing dependencies

Routing

Naming conventions

Preserve the existing application architecture while implementing the supplied design as accurately as possible.

Do not make creative design decisions unless the supplied design does not specify something.

When something is genuinely unspecified, choose the simplest solution that remains consistent with the existing design system.

