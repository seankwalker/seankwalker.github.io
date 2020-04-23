"use strict";

const TITLE_ID = "#section-title";
const BODY_ID = "#section-body";
const NAV_ID = "#section-pages-nav";

const SECTION_ID_STUB = "#section-selector-";

// content for sections
// CSS ID can be constructed from "section-selector-" + section title
const CONTENT = [
    {
        id: `${SECTION_ID_STUB}about`,
        title: "about",
        body:
            "Bacon ipsum dolor amet rump fatback sirloin pork. Picanha tenderloin frankfurter tri-tip capicola turducken alcatra. Beef kevin shank, beef ribs doner ham hock prosciutto tongue venison chicken meatloaf filet mignon landjaeger. Corned beef chuck spare ribs kielbasa buffalo salami pastrami prosciutto venison cow beef chicken.",
        multipage: false,
    },
    {
        id: `${SECTION_ID_STUB}portfolio`,
        title: "portfolio",
        body:
            "since june 2019, i've worked as a fullstack engineer at snackpass (yc w18). snackpass offers convenient, discounted food ordering (delivery, pickup, and dine-in) for customers and powerful analytics, marketing, and other business tools to our restaurant partners. i primarily focus on our partner-facing products, including a point-of-sale (pos) iOS app, an in-store self order kiosk, and various internal tools and dashboards.",
        multipage: true,
        pages: [{}],
    },
    {
        id: `${SECTION_ID_STUB}resume`,
        title: "resume",
        body: "indev",
        multipage: false,
    },
];

const updateSelectedDisplay = () =>
    CONTENT.forEach(({ title, body }) => {
        const sectionIsSelected = $(TITLE_ID).html() === title;
        $(`${SECTION_ID_STUB}${title}`).css(
            "text-decoration",
            sectionIsSelected ? "underline" : "none"
        );
    });

const createClickHandlerForSection = ({ title, body, multipage }) => (
    event
) => {
    const sectionIsSelected = $(TITLE_ID).html() === title;
    const newTitle = sectionIsSelected ? "" : title;
    const newBody = sectionIsSelected ? "" : body;
    const newMultipage = !sectionIsSelected && multipage;

    $(TITLE_ID).html(newTitle);
    $(BODY_ID).html(newBody);

    newMultipage ? $(NAV_ID).show() : $(NAV_ID).hide();

    updateSelectedDisplay();
};

CONTENT.forEach((contentSpec) =>
    $(contentSpec.id).on("click", createClickHandlerForSection(contentSpec))
);
