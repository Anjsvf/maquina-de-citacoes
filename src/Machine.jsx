// Machine.js

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import "./Machinestyle.css";

const quotes = [
    { text: "''A verdadeira coragem é ser honesto consigo mesmo''", author: "Mr-Robot" },
    { text: "''Não é a linguagem de programação que define o programador, mas sim sua lógica.''", author: "David Ribeiro Guilherme" },
    { text: "''Faça como um programador. Quando tudo está errado e confuso, apague tudo e recomece do zero.''", author: "David Ribeiro Guilherme" },
    { text: "''Linguagens não morrem mas sim seus programadores.''", author: "Thales de Oliveira Gomes" },
    { text: "''Nunca houve um inesperadamente Período de depuração curto na história dos computadores.''", author: "Steven levy" },
    { text: "''Tudo bem para descobrir mistérios de assassinato, mas você não deve precisar descobrir o código. Você deve ser capaz de lê-lo''", author: "Steve mcConnell " },
    { text: "''Trabalha com gosto e terás o gosto do trabalho''", author: "Benjamin Franklin" },
    { text: "''Há engenheiros de software e pedreiros de software''", author: "Danilo Gomes" },
    { text: "''Nunca ande por trilhas, pois assim só irá até onde outros já foram''", author: "Alexander Graham Bell" },
];

const Machine = () => {
    const [quoteIndex, setQuoteIndex] = useState(0);

    const getRandomQuote = () => {
        const newIndex = Math.floor(Math.random() * quotes.length);
        setQuoteIndex(newIndex);
    };

    const tweetQuote = () => {
        const quote = encodeURIComponent(quotes[quoteIndex].text);
        const author = encodeURIComponent(quotes[quoteIndex].author);
        const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
        window.open(twitterUrl, "_blank");
    };

    useEffect(() => {
        getRandomQuote();
    }, []);

    return (
        <div>
            <div id="quote-box">
                <div id="text">{quotes[quoteIndex].text}</div>
                <div id="author">- {quotes[quoteIndex].author}</div>
                <button id="new-quote" onClick={getRandomQuote}>Nova Citação</button>
                <a id="tweet-quote" href="#" onClick={tweetQuote}>Tweetar Citação</a>
            </div>
        </div>
    );
};

Machine.propTypes = {
    // Add prop types if needed
};

export default Machine;
