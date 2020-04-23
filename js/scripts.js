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
        body: "",
    },
    {
        id: `${SECTION_ID_STUB}portfolio`,
        title: "portfolio",
        body: "under construction",
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

const createClickHandlerForSection = ({ title, body, multipage }) => _event => {
    const sectionIsSelected = $(TITLE_ID).html() === title;
    const newTitle = sectionIsSelected ? "" : title;
    const newBody = sectionIsSelected ? "" : body;

    $(TITLE_ID).html(newTitle);
    $(BODY_ID).html(newBody);

    updateSelectedDisplay();
};

CONTENT.forEach(contentSpec =>
    $(contentSpec.id).on("click", createClickHandlerForSection(contentSpec))
);
