import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VBuilding — The #1 Irregular Verbs Game" },
      {
        name: "description",
        content:
          "Master English irregular verbs in a Playtika-grade arcade adventure. Build cities, travel the world, and level up your grammar.",
      },
      { property: "og:title", content: "VBuilding — The #1 Irregular Verbs Game" },
      {
        property: "og:description",
        content:
          "A premium arcade-style verbs game. Travel countries, stack blocks, hit fever mode.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/game.html"
      title="VBuilding Game"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "none",
        display: "block",
      }}
      allow="autoplay; fullscreen"
    />
  );
}
