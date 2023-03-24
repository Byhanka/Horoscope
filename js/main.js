//Create an app that will give a horoscope when month and day is put into the system

    //store the date
        //create variable day input
        //create variable month input
        //create variable button

const monthInput = document.querySelector('#month')
const dayInput = document.querySelector('#day')
const checkBtn = document.querySelector('#check')
const result = document.querySelector('#result')
const message = document.querySelector('#message')

//create your function to display the signs
// Aquarius (1/20 – 2/18)
// Pisces (2/19 – 2/20)
// Aries (4/ 21 – 4/ 19)
// Taurus (4/20 – 5/20)
// Gemini (5/21 – 6/20)
// Cancer (6/21 – 7/22)
// Leo (7/23 – 8/22)
// Virgo (8/23 – 9/22)
// Libra (9/23 – 10/22)
// Scorpio (10/23 – 11/21)
// Sagittarius (11/22 – 12/21)
// Capricorn (12/22 – 1/19)

function horoscope (){
    const month = Number(monthInput.value)
    const day = Number(dayInput.value)
    if(month === 01 && day >= 20 || month === 02 && day <= 18 ){
        result.innerText = 'You are an AQUARIUS!'
        message.innerText = 'Sudden and unexpected problems could have your household in chaos, Aquarius. This probably does not relate to difficulties with your housemates. It is more likely to involve problems with wiring, appliances, or phone lines. It could be annoying to deal with repairmen in and out of your house, but you will have to bear with it. You want your household back to normal as soon as possible.'
    } else if( month === 02 && day >= 19 || month === 03 && day <= 20) {
        result.innerText = 'You are a PISCES!'
        message.innerText = 'Too many communications may prove distracting today, Pisces. The phone could be ringing off the hook and your email inbox overflowing. Everyone around you seems to be talking at once. If you do not bring some order to this chaos, it could give you a headache! Let voicemail get the phone, get away from the computer, and take something light to the park to read. You need some peace and quiet.'
    } else if (month === 03 && day >= 21 || month === 01 && day <= 19) {
        result.innerText = 'You are a ARIES!'
        message.innerText = 'A sudden but necessary expense could make a big hole in your budget today, Aries. Perhaps some repairs need to be made around the house or to the car. Maybe someone needs an unexpected trip to the dentist. This could throw you off balance, but you can manage it by cutting some corners. So what if you have to eat pasta for a week or two? It could be worse! Just move ahead with whatever needs to be done.'
    } else if( month === 04 && day >= 20 || month === 05 && day<= 20){
        result.innerText = 'You are a TAURUS!'
        message.innerText = 'Generally you are pretty emotionally stable, Taurus. Todays events might seem to conspire to create erratic moods that you are not used to feeling. No major concerns should arise, but little irritations like dropping things, misplacing keys, or missing calls could get on your nerves. Slow down and stay focused. It is the only way you will remain calm today.'
    } else if (month === 05 && day >= 21 || month === 06 && day <= 20){
        result.innerText = 'You are a GEMINI!'
        message.innerText = 'If you have been studying astrology, numerology, or any other occult science, Gemini, today you might find some of the concepts you are studying a bit confusing. You may have glossed over some of the ideas that are prerequisites to what you are looking at now. Go back and review last weeks lesson and everything might make more sense to you. You will probably progress that much faster for doing this.'
    } else if (month === 06 && day >= 21 || month === 07 && day <= 22 ){
        result.innerText = 'You are a CANCER!'
        message.innerText = 'A friend could be having financial troubles and ask you for a loan, Cancer. You like this person and understand what he or she is going through, so you want to help. But it could be a while before your friend is solvent again. If you make the loan, remember the adage about never lending anything to a friend that you are not willing to consider a gift. Do not depend on immediate repayment.'
    } else if (month === 07 && day >= 23 || month === 08 && day <= 22){
        result.innerText ='You are a LEO!'
        message.innerText = 'Some equipment that you use a lot, perhaps an appliance, computer, or TV, might go on the blink today, Leo. Do not try to fix it yourself even if you think you know how. Call a professional, and hang the expense. If you try to do it yourself, you might cause more damage to the equipment or perhaps to you! This is definitely a day to exercise caution. Be patient!'
    } else if (month === 08 && day >= 23 || month === 09 && day <= 22) {
        result.innerText = 'You are a VIRGO!'
        message.innerText = 'Some rather bizarre news could come to you today about metaphysical or paranormal matters, Virgo. This is not anything that affects you directly, but more likely concerns discoveries of anomalies. You and others could find it fascinating and discuss it for hours. Do not be surprised if the theories that come up seem even more bizarre than what you heard in the first place!'
    } else if ( month === 09 && day >= 23 || month === 10 && day <= 22) {
        result.innerText = 'You are a LIBRA!'
        message.innerText = ' This could be a hectic day, Libra. You will probably try to go too many places and do too many things at once. Friends might want to get together, but you may have a lot of errands to take care of. It might be a good idea to assess what needs to be done and take care of it in order of urgency. That is the only way you can stay sane!'
    } else if (month === 10 && day >= 23 || month === 11 && day <= 21){
        result.innerText = 'You are the best sign! SCORPIO!'
        message.innerText = 'You might hear some rather bizarre rumors today, Scorpio. Someone has misinterpreted a piece of information and blown it into something far different from reality. You will need to check this out for yourself before jumping to any conclusions. Do not be afraid to pass on what you learn. It is better to nip this sort of gossip in the bud by revealing the facts than let it continue to spread.'
    } else if (month === 11 && day >= 22 || month === 12 && day <= 21){
        result.innerText = 'You are a SAGITTARIUS!'
        message.innerText = 'Today you might plan a quick trip by air, Sagittarius. This could be business related. Someone else may have been meant to go but could not, so you may be taking his or her place. This could be disruptive for you, but if you make an effort, you can turn it into an adventure. It is always best to go with the flow and make the most of it.'
    } else if (month === 12 && day >= 22 || month === 01 && day <= 19){
        result.innerText = 'You are a CAPRICORN!'
        message.innerText = 'A date to get together with a romantic partner might have to be broken at the last minute, Capricorn. Your friend might not give a reason, and you might wonder if this means he or she does not really want to see you. That probably is not the case. All signs are that your friend has received some bad news and did not want to upset you. Hang in there. You should hear from your honey again soon.'
    }
}

// add the event listener to listen for the click of the button and then print the correct horoscope
checkBtn.addEventListener('click', horoscope)

