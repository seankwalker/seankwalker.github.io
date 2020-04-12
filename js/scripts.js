"use strict";

const TITLE_ID = "section-title";
const BODY_ID = "section-body";

const SECTION_ID_STUB = "section-selector-";

// content for sections
// CSS ID can be constructed from "section-selector-" + section title
const CONTENT = [
  {
    title: "about",
    body:
      "Bacon ipsum dolor amet rump fatback sirloin pork. Picanha tenderloin frankfurter tri-tip capicola turducken alcatra. Beef kevin shank, beef ribs doner ham hock prosciutto tongue venison chicken meatloaf filet mignon landjaeger. Corned beef chuck spare ribs kielbasa buffalo salami pastrami prosciutto venison cow beef chicken.",
  },
  {
    title: "portfolio",
    body: "indev",
  },
  {
    title: "resume",
    body: "indev",
  },
];

const updateSelectedDisplay = () =>
  CONTENT.forEach(({ title, body }) => {
    const sectionIsSelected = $(`#${TITLE_ID}`).html() === title;
    $(`#${SECTION_ID_STUB}${title}`).css("text-decoration", sectionIsSelected ? "underline" : "none");
  });

const createClickHandlerForSection = ({ title, body }) => (event) => {
  const sectionIsSelected = $(`#${TITLE_ID}`).html() === title;
  const newTitle = sectionIsSelected ? "" : title;
  const newBody = sectionIsSelected ? "" : body;

  $(`#${TITLE_ID}`).html(newTitle);
  $(`#${BODY_ID}`).html(newBody);

  updateSelectedDisplay();
};

CONTENT.forEach((contentSpec) =>
  $(`#${SECTION_ID_STUB}${contentSpec.title}`).on("click", createClickHandlerForSection(contentSpec))
);
