import { useState } from 'react'

import { Faq as FaqItems } from '@root/constants'

const Faq = () => {
  const [selected, setSelected] = useState(0)

  const toggle = (i: number) => {
    if (selected === i) {
      return setSelected(0)
    }
    setSelected(i)
  }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="accordion">
          {FaqItems.map((item, i) => (
            <div className="item" key={i}>
              <div className="title" onClick={() => toggle(i)}>
                <h2>{item.question}</h2>
                <span
                  className={`expanded-icon ${selected === i ? 'minus' : ''}`}
                >
                  {selected === i ? '-' : '+'}
                </span>
              </div>
              <div className={selected === i ? 'content show' : 'content'}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq
