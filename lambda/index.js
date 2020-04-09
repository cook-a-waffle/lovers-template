const Alexa = require('ask-sdk-core');
const helloworldDocument = require('./helloworldDocument.json');
//////////////////////////////////////////////////////////////////////////////////////////
//  Messages


const WELCOME_MESSAGE = "Welcome to the Relationship Skill. "
const WELCOME_MESSAGE_rp = "you can ask for fun facts, for a picture, or about the anniversary. "

const FUNFACT_MESSAGE = [
    "Here's a fun fact for you, ",
    "Ok here goes, ",
    "Ok, did you know that ",
    "A fun fact is that "
]

const PIC_MESSAGE = [
    "Take a look at this ",
    "You two look great together",
]

const anniv_date = {
    'm':'January',
    'd': 'fourth'
}

const ANNIV_MESSAGE = [`your anniversary is on, `]

//////////////////////////////////////////////////////////////////////////////////////////
//  Variables

const factList = [
    "Lucy and John met in Mexico, while on vacation on 2017.",
    "Lucy and John started going out after seeing each other in Texas University.",
    "Lucy and John became a relationship on January fourth.",
    "Lucy loves to eat mcdonalds, but John hates it.",
    "Lucy's favorite color is green.",
    "John's biggest hobbie is to travel.",
    "John's favorite place is Sydney, Australia.",
    "Lucy and John like to take walks in the city together."
]

const picList = {
    'John':{
        'smallUrl':'https://waffle-content.s3.amazonaws.com/lovers-skill/waffle_lovers_man1_s.jpg',
        'largeUrl':'https://waffle-content.s3.amazonaws.com/lovers-skill/waffle_lovers_man1_l.jpg'
    },
    'Lucy':{
        'smallUrl':'https://waffle-content.s3.amazonaws.com/lovers-skill/waffle_lovers_woman1_s.jpg',
        'largeUrl':'https://waffle-content.s3.amazonaws.com/lovers-skill/waffle_lovers_woman1_l.jpg'
    },
    'Relationship':[
        {
        'smallUrl':'https://waffle-content.s3.amazonaws.com/lovers-skill/waffle_lovers_relationship1_s.jpg',
        'largeUrl':'https://waffle-content.s3.amazonaws.com/lovers-skill/waffle_lovers_relationship1_l.jpg'
    },
    {
        'smallUrl':'https://waffle-content.s3.amazonaws.com/lovers-skill/waffle_lovers_relationship4_s.jpg',
        'largeUrl':'https://waffle-content.s3.amazonaws.com/lovers-skill/waffle_lovers_relationship4_l.jpg'
    }]
}



//////////////////////////////////////////////////////////////////////////////////////////
//  Functions

const getRandom = (array) => array[Math.floor(Math.random()* array.length)];


//////////////////////////////////////////////////////////////////////////////////////////
//  Launch Request

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speechText = WELCOME_MESSAGE + WELCOME_MESSAGE_rp;

        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(WELCOME_MESSAGE_rp)
        .withSimpleCard(WELCOME_MESSAGE, WELCOME_MESSAGE_rp)
        .getResponse();
    }
};

//////////////////////////////////////////////////////////////////////////////////////////
//  Skill Intents

const GetFunFactIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'GetFunFact';
    },
    handle(handlerInput) {
        const temp_message = getRandom(FUNFACT_MESSAGE);
        const temp_fact = getRandom(factList);
        const speechText = temp_message + temp_fact;

        return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(temp_message, temp_fact)
        .getResponse()
    }
};

const ShowPicsIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'ShowPics';
    },
    handle(handlerInput) {
        const speechText = getRandom(PIC_MESSAGE);
        
        return handlerInput.responseBuilder
        .speak(speechText)
        .getResponse()
    }
};

const GetAnnivIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'GetAnniv';
    },
    handle(handlerInput) {
        const temp_message = getRandom(ANNIV_MESSAGE)
        const speechText = temp_message + anniv_date;

        return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard(temp_message, anniv_date)
        .getResponse();
    }
};

const GetCountDownIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'GetCountDown';
    },
    handle(handlerInput) {
        const speechText = 'Get countdown intent speak';

        return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard('Get countdown card', speechText)
        .getResponse();
    }
};

const NewAnnivIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'GetCountDown';
    },
    handle(handlerInput) {
        const speechText = 'Will do, just tell me the new date.';

        return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard('Get countdown card', speechText)
        .getResponse();
    }
};

const RegAnnivIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'RegAnniv';
    },
    handle(handlerInput) {
        const monthR = handlerInput.requestEnvelope.request.intent.    
        const monthR = handlerInput.requestEnvelope.request.intent.
        
        const speechText = 'Get countdown intent speak';

        return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard('Get countdown card', speechText)
        .getResponse();
    }
};

//////////////////////////////////////////////////////////////////////////////////////////
//  Support Intents

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speechText = 'You can say hello to me!';
  
        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(speechText)
        .withSimpleCard('Hello World', speechText)
        .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent' || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speechText = 'Goodbye!';
  
        return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard('Hello World', speechText)
        .withShouldEndSession(true)
        .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        //any cleanup logic goes here
        return handlerInput.responseBuilder.getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`Error handled: ${error.message}`);
  
        return handlerInput.responseBuilder
        .speak('Sorry, I can\'t understand the input. This is Error Handler, woops.')
        .reprompt('Sorry, I can\'t understand the input. This is Error Handler, woops.')
        .getResponse();
    },
};

//////////////////////////////////////////////////////////////////////////////////////////
//  Lambda Handler

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
    LaunchRequestHandler,
    GetFunFactIntentHandler,
    ShowPicsIntentHandler,
    GetAnnivIntentHandler,
    GetCountDownIntentHandler,
    NewAnnivIntentHandler,
    RegAnnivIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler)
    .addErrorHandlers(ErrorHandler)
    .lambda();