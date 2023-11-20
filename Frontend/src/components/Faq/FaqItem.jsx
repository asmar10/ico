import React from "react";
import cn from "classnames";
import ScrollAnimation from "react-animate-on-scroll";

const FaqItem = (props) => {
  return (
    <div className="accordion-item">
      <ScrollAnimation animateIn="fadeInUp">
        <h2 className="accordion-header" id={props.item.id}>
          <button
            className={cn("accordion-button", props.item.btnClass)}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${props.item.controls}`}
            aria-expanded={props.item.expanded}
            aria-controls={props.item.controls}
          >
            {props.item.title}
          </button>
        </h2>
        <div
          id={props.item.controls}
          className={cn("accordion-collapse collapse", props.item.contentClass)}
          aria-labelledby={props.item.id}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>{props.item.details}</p>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default FaqItem;
