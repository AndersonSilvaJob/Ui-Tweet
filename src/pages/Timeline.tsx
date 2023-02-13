import { FormEvent, useState, KeyboardEvent } from "react";
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Timeline.css';

export function Timeline(){

  const [newTwett, setNewTweet] = useState('')

  const [tweets, setTweets] = useState([
    'Meu Primeiro Tweet',
    'Teste',
    'Deu certo Tweetar!'
  ])

  function createNewTweet(event: FormEvent){
    event.preventDefault()
    
    setTweets([newTwett,...tweets])
    setNewTweet('')
  }

  
  function handleHotKeySubmit(event: KeyboardEvent){
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTwett,...tweets])
      setNewTweet('')
    }
  }

  return (
    <main className="timeline">
    <Header title="Home"/>


    <form onSubmit={createNewTweet} className="new-tweet-form">
      <label htmlFor="tweet">
        <img src="https://github.com/AndersonSilvaJob.png" alt="Anderson Silva"/>
        <textarea 
          id="tweet" 
          placeholder="Whats happening?" 
          onKeyDown={handleHotKeySubmit}
          onChange={(event) => {
            setNewTweet(event.target.value)
          }}
          />
      </label>

      <button type="submit">Tweet</button>
    </form>

    <Separator />

    {tweets.map(tweet => {
      return <Tweet key={tweet} content={tweet} />
    })}

  </main>
  )
}