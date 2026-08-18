const FACTS = [
  `I LOVE animals - dogs, cats, pigs, bunnies... etc. I currently have an eight-year-old rescue soft coated wheaten terrier named Hank `,
  `My mom passed down her love of ice cream and TV. Cookie dough and sugar cookie are my go-tos.`,
  `Favorite TV: Friends, Legally Blonde, Gilmore Girls, and Bridesmaids.`,
  `I love to go for walks with peach matcha`,
  `I love tubing, wake surfing, wakeboarding, and a game my friends call "the dolphin" (hang onto a rope in the wake and just get dragged behind the boat.)`,
  `Favorite book series: The Selection.`,
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
