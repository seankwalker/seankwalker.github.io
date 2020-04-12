"use strict";

const TITLE_ID = "section-title";
const BODY_ID = "section-body";

// content for sections
const CONTENT = [
  {
    id: "section-selector-about",
    title: "about",
    body:
      "Bacon ipsum dolor amet rump fatback sirloin pork. Picanha tenderloin frankfurter tri-tip capicola turducken alcatra. Beef kevin shank, beef ribs doner ham hock prosciutto tongue venison chicken meatloaf filet mignon landjaeger. Corned beef chuck spare ribs kielbasa buffalo salami pastrami prosciutto venison cow beef chicken.",
  },
];

const createClickHandlerForSection = ({ title, body, id }) => (event) => {
  const sectionIsSelected = $(`#${TITLE_ID}`).html() === title;
  const newTitle = sectionIsSelected ? "" : title;
  const newBody = sectionIsSelected ? "" : body;

  $(`#${TITLE_ID}`).html(newTitle);
  $(`#${BODY_ID}`).html(newBody);
  $(`#${id}`).css("text-decoration", sectionIsSelected ? "none" : "underline");
};

CONTENT.forEach((contentSpec) => $(`#${contentSpec.id}`).on("click", createClickHandlerForSection(contentSpec)));
