/** @jsx jsx */
import { jsx } from "@emotion/core";

function Button({ styles, ...props }) {
  return (
    <button
      {...props}
      css={{
        backgroundColor: "rgb(5,155,229)",
        border: "none",
        height: "2rem",
        width: "auto",
        borderRadius: ".25rem",
        color: "white",
        cursor: "pointer",
        fontSize: ".8rem",
        padding: "0 .75rem",
        transition: "all 200ms ease",
        textAlign: "center",
        fontWeight: "bold",

        "&:hover": {
          backgroundColor: "rgb(0,135,209)",
          color: "white"
        },
        ...styles
      }}
    />
  );
}

function CircleButton({ styles, ...props }) {
  return (
    <div
      {...props}
      css={{
        height: "40px",
        width: "40px",
        borderRadius: "50%",
        textAlign: "center",
        verticalAlign: "middle",
        lineHeight: "40px",
        fontWeight: "9px",
        fontSize: "22px",
        color: "rgb(5,155,229)",
        "&:hover": {
          backgroundColor: "rgb(176, 220, 252)",
          cursor: "pointer"
        },
        ...styles
      }}
    />
  );
}

function Card({ styles, ...props }) {
  return (
    <div
      {...props}
      css={{
        background: "white",
        borderRadius: ".2em",
        boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, .12)",
        boxSizing: "border-box",
        padding: "2rem",
        width: "100%",
        ...styles
      }}
    />
  );
}

function Input({ styles, ...props }) {
  return (
    <input
      {...props}
      css={{
        background: "none",
        border: "1px solid #eaeaea",
        borderRadius: ".25rem",
        boxSizing: "border-box",
        display: "block",
        fontSize: "1rem",
        padding: ".5rem",
        width: "100%",
        "&:focus": {
          outline: "none",
          borderColor: "#444444"
        },
        ...styles
      }}
    />
  );
}

function Modal({ styles = {}, children }) {
  return (
    <div
      css={{
        backgroundColor: "rgba(0, 0, 0, .5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        ...(styles.backdrop || {})
      }}
    >
      <div
        role="dialog"
        css={{
          position: "fixed",
          top: "50%",
          transform: "translateY(-50%)",
          width: "80%",
          maxWidth: 450,
          zIndex: 110,
          ...(styles.dialog || {})
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Select({ styles = {}, children, ...props }) {
  return (
    <div
      css={{
        WebkitAppearance: "none",
        color: "rgb(0, 0, 0)",
        display: "inline-flex",
        height: 40,
        fontSize: 12,
        textTransform: "uppercase",
        userSelect: "none",
        fontWeight: 100,
        position: "relative",
        whiteSpace: "nowrap",
        lineHeight: 0,
        width: "auto",
        minWidth: 160,
        background: "rgb(255, 255, 255)",
        outline: "none",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgb(234, 234, 234)",
        borderImage: "initial",
        overflow: "hidden",
        transition:
          "border 0.2s ease 0s, background 0.2s ease 0s, color 0.2s ease-out 0s, box-shadow 0.2s ease 0s",
        borderRadius: 4,
        ...(styles.container || {})
      }}
    >
      <select
        css={{
          height: "100%",
          boxShadow: "none",
          color: "rgb(0, 0, 0)",
          lineHeight: 40,
          fontSize: 14,
          marginRight: -20,
          width: "calc(100% + 20px)",
          textTransform: "none",
          borderWidth: "initial",
          borderStyle: "none",
          borderColor: "initial",
          borderImage: "initial",
          background: "none transparent",
          padding: "0px 76px 0px 16px",
          outline: "none",
          ...(styles.select || {})
        }}
        {...props}
      >
        {children}
      </select>
      <div
        css={{
          width: 30,
          height: "100%",
          position: "absolute",
          right: 0,
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderLeft: "1px solid rgb(234, 234, 234)",
          background: "rgb(255, 255, 255)",
          transition: "border 0.2s ease 0s",
          ...(styles.icon || {})
        }}
      >
        <svg
          width="7"
          height="17"
          viewBox="0 0 7 12"
          fill="none"
          aria-label="arrow double"
        >
          <path
            d="M0.642491 3.35053L0.292945 3.70804L1.00798 4.40714L1.35752 4.04962L0.642491 3.35053ZM3.75752 1.59491L4.10707 1.23739L3.39204 0.538299L3.04249 0.895815L3.75752 1.59491ZM5.58506 4.04651L5.93149 4.40704L6.65256 3.71417L6.30613 3.35364L5.58506 4.04651ZM3.95354 0.9053L3.6071 0.544767L2.88604 1.23763L3.23247 1.59817L3.95354 0.9053ZM1.35752 7.95041L1.00797 7.59289L0.292938 8.29198L0.642485 8.6495L1.35752 7.95041ZM3.04248 11.1042L3.39203 11.4617L4.10706 10.7626L3.75751 10.4051L3.04248 11.1042ZM6.36054 8.64636L6.70697 8.28583L5.98591 7.59296L5.63947 7.95349L6.36054 8.64636ZM3.28688 10.4018L2.94045 10.7624L3.66152 11.4552L4.00795 11.0947L3.28688 10.4018ZM1.35752 4.04962L3.75752 1.59491L3.04249 0.895815L0.642491 3.35053L1.35752 4.04962ZM6.30613 3.35364L3.95354 0.9053L3.23247 1.59817L5.58506 4.04651L6.30613 3.35364ZM0.642485 8.6495L3.04248 11.1042L3.75751 10.4051L1.35752 7.95041L0.642485 8.6495ZM5.63947 7.95349L3.28688 10.4018L4.00795 11.0947L6.36054 8.64636L5.63947 7.95349Z"
            fill="#000"
          />
        </svg>
      </div>
    </div>
  );
}

export { Button, Card, Input, Modal, Select, CircleButton };
