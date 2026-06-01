import { useState } from "react";

const CookingCard = ({ order, handleCooking }) => {
  const [cooked, setCooked] = useState(false);

  const handleClick = () => {
    setCooked(true);
    handleCooking(order);
  };

  return (
    <div
      style={{
        background: "var(--color-background-primary)",
        border: "0.5px solid var(--color-border-tertiary)",
        borderRadius: 12,
        overflow: "hidden",
        width: 280,
      }}
    >
      {/* Header strip */}
      <div
        style={{
          background: "linear-gradient(135deg, #FAC775 0%, #EF9F27 60%, #BA7517 100%)",
          padding: "20px 20px 16px",
          position: "relative",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 12,
            right: 14,
            background: "rgba(255,255,255,0.25)",
            borderRadius: 20,
            padding: "3px 10px",
            fontSize: 12,
            fontWeight: 500,
            color: "#412402",
          }}
        >
          {cooked ? "Cooked" : "In progress"}
        </span>
        <div style={{ fontSize: 22, marginBottom: 6 }}>🍽️</div>
        <h3
          style={{
            margin: 0,
            fontSize: 17,
            fontWeight: 500,
            color: "#412402",
            lineHeight: 1.3,
          }}
        >
          {order.order_title}
        </h3>
      </div>

      {/* Body */}
      <div style={{ padding: "16px 20px 20px" }}>
        {/* Quantity chip */}
        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          <div
            style={{
              background: "var(--color-background-secondary)",
              borderRadius: 8,
              padding: "8px 14px",
              flex: 1,
              textAlign: "center",
            }}
          >
            <p style={{ margin: 0, fontSize: 11, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
              Quantity
            </p>
            <p style={{ margin: "4px 0 0", fontSize: 20, fontWeight: 500 }}>
              ×{order.quantity}
            </p>
          </div>
        </div>

        {/* Special instruction */}
        {order.special_instruction && (
          <div
            style={{
              background: "var(--color-background-secondary)",
              borderRadius: 8,
              padding: "10px 12px",
              marginBottom: 16,
              borderLeft: "3px solid #EF9F27",
            }}
          >
            <p style={{ margin: 0, fontSize: 11, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 4 }}>
              Special instruction
            </p>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5 }}>
              {order.special_instruction}
            </p>
          </div>
        )}

        {/* Action button */}
        <button
          onClick={handleClick}
          disabled={cooked}
          style={{
            width: "100%",
            padding: 10,
            borderRadius: 8,
            border: "0.5px solid var(--color-border-secondary)",
            background: cooked ? "#EAF3DE" : "var(--color-background-primary)",
            color: cooked ? "#3B6D11" : "var(--color-text-primary)",
            fontSize: 14,
            fontWeight: 500,
            cursor: cooked ? "default" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          {cooked ? "✓ Marked as cooked!" : "Mark as cooked"}
        </button>
      </div>
    </div>
  );
};

export default CookingCard;