const FACTS = [
  `Animal person to my core - dogs, cats, pigs, bunnies, I don't discriminate. Currently owned by Hank, our rescue soft coated wheaten terrier who's allegedly 8 but acts like a puppy, so who really knows.`,
  `My mom passed down her love of ice cream and TV. Cookie dough and sugar cookie are my go-tos. Where we differ: comfort shows. She won't rewatch anything twice, while I could watch Friends for the 10th time and still laugh at the jokes I could recite before even hearing them. I also love Legally Blonde, Gilmore Girls, and Bridesmaids.`,
  `If I ask you to "go for a walk," I actually mean a slow stroll with a peach matcha in hand. It's not much exercise, but I love to talk too much.`,
  `I love tubing, wake surfing, wakeboarding, and a game my friends call "the dolphin" (hang onto a rope in the wake and just get dragged behind the boat. PSA: cinch your shorts tight or you will flash someone).`,
  `Deep in my TikTok/Pinterest era.`,
  `Favorite book series is The Selection. I'm fully aware it's a middle school series, but I love it all the same.`,
]

export default function FunFacts() {
  return (
    <section className="panel">
      <h2 className="panel-title">Fun Facts</h2>
      <ul className="fact-list">
        {FACTS.map((fact) => (
          <li key={fact.slice(0, 20)}>{fact}</li>
        ))}
      </ul>
    </section>
  )
}
