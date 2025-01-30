import { CardProps } from "@/types/components";
import CardMd from "../cards/CardMd";

const Suggestion = ({ suggestionCards }: { suggestionCards: CardProps[] }) => {
  return (
    <div className="p-4">
      <h5 className="text-lg font-semibold text-white mb-4 text-center block">More from this author</h5>
      <div className="flex gap-4 flex-wrap">
        {suggestionCards.slice(0, 6).map((card) => (
          <CardMd key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Suggestion;
