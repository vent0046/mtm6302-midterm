const stories = [
  {
    title: 'Mission Statement',
    words: [
      'Adjective',
      'Verb 1',
      'Verb 2',
      'Plural Noun 1',
      'Plural Noun 2',
      'Plural Noun 3'
    ],
    output: function (words) {
      return `<p>Our mission is to <span class="word">${words['Verb 1']}</span> our <span class="word">${words['Plural Noun 2']}</span> with <span class="word">${words.Adjective}</span> <span class="word">${words['Plural Noun 3']}</span> that will <span class="word">${words['Verb 2']}</span> their <span class="word">${words['Plural Noun 1']}</span>.</p>`
    }
  },
  {
    title: 'Lunch Room!',
    words: [
      'Animal',
      'Adjective 1',
      'Adjective 2',
      'Vegetable 1',
      'Vegetable 2',
      'Noun',
      'Container'
    ],
    output: function (words) {
      return `<p>Make sure your lunch <span class="word">${words.Container}</span> is filled with <span class="word">${words['Adjective 1']}</span> food. Do not go to the <span class="word">${words['Adjective 2']}</span> food stand across the street from the school. The hamburgers they serve are fried in <span class="word">${words.Noun}</span> and are made of <span class="word">${words.Animal}</span> meat. So take a sandwich made of <span class="word">${words['Vegetable 1']}</span> or <span class="word">${words['Vegetable 2']}</span>, it's much healthier!</p>`
    }
  },

  {
    title: 'Weather Report',
    words: [
      'Adjective 1',
      'Adjective 2',
      'Article of Clothing',
      'Number 1',
      'Number 2',
      'Plural Noun 1',
      'Plural Noun 2'
    ],
    output: function (words) {
      return `<p>Early tomorrow, a <span class="word">${words['Adjective 1']}</span> front will collide with a mass of hot <span class="word">${words['Plural Noun 1']}</span> moving from the north. This means we can expect <span class="word">${words['Adjective 2']}</span> winds and occasional <span class="word">${words['Plural Noun 2']}</span> by late afternoon. Wind velocity will be <span class="word">${words['Number 1']}</span> miles an hour, and the high temperature should be around <span class="word">${words['Number 2']}</span> degrees. So, if you're going out, you had better plan on wearing your<span class="word"> ${words['Article of Clothing']}</span>.</p>`
    }
  }
]


function reloadStory()
{
  document.getElementById("readstory").style.display = "none";
  document.getElementById("storylist").style.display = "block";
}
function readStory(storyid)
{
  document.getElementById("providewords").style.display = "none";
  document.getElementById("readstory").style.display = "block";
  document.getElementById("readstory").innerHTML = "";
  document.getElementById("readstory").innerHTML += "<h3>"+stories[storyid].title+"</h3>";
  if(storyid == "0")
  {
    adjective = document.getElementById(stories[0].words[0].replace(/\s/g,'').toLowerCase()).value;

    verb1 = document.getElementById(stories[0].words[1].replace(/\s/g,'').toLowerCase()).value;

    verb2 = document.getElementById(stories[0].words[2].replace(/\s/g,'').toLowerCase()).value;

    pluralnoun1 = document.getElementById(stories[0].words[3].replace(/\s/g,'').toLowerCase()).value;

    pluralnoun2 = document.getElementById(stories[0].words[4].replace(/\s/g,'').toLowerCase()).value;

    pluralnoun3 = document.getElementById(stories[0].words[5].replace(/\s/g,'').toLowerCase()).value;
    
    document.getElementById("readstory").innerHTML += "<p>Our mission is to <span class='word'>"+verb1+"</span> our <span class='word'>"+pluralnoun2+"</span> with <span class='word'>"+adjective+"</span> <span class='word'>"+pluralnoun3+"</span> that will <span class='word'>"+verb2+"</span> their <span class='word'>"+pluralnoun1+"</span>.</p>";
    document.getElementById("readstory").innerHTML += "<input type='button' class='' id='createAnotherStory' value='Create Another Story' onclick='reloadStory()' />";
  }
  else if(storyid == "1")
  {
    animal = document.getElementById(stories[1].words[0].replace(/\s/g,'').toLowerCase()).value;

    adjective1 = document.getElementById(stories[1].words[1].replace(/\s/g,'').toLowerCase()).value;

    adjective2 = document.getElementById(stories[1].words[2].replace(/\s/g,'').toLowerCase()).value;

    vegetable1 = document.getElementById(stories[1].words[3].replace(/\s/g,'').toLowerCase()).value;

    vegetable2 = document.getElementById(stories[1].words[4].replace(/\s/g,'').toLowerCase()).value;

    noun = document.getElementById(stories[1].words[5].replace(/\s/g,'').toLowerCase()).value;

    container = document.getElementById(stories[1].words[6].replace(/\s/g,'').toLowerCase()).value;
    
    document.getElementById("readstory").innerHTML += "<p>Make sure your lunch <span class='word'>"+container+"</span> is filled with <span class='word'>"+adjective1+"</span> food. Do not go to the <span class='word'>"+adjective2+"</span> food stand across the street from the school. The hamburgers they serve are fried in <span class='word'>"+noun+"</span> and are made of <span class='word'>"+animal+"</span> meat. So take a sandwich made of <span class='word'>"+vegetable1+"</span> or <span class='word'>"+vegetable2+"</span>, it's much healthier!.</p>";
    document.getElementById("readstory").innerHTML += "<input type='button' class='' id='createAnotherStory' value='Create Another Story' onclick='reloadStory()' />";
  }
  else if(storyid == "2")
  {
     adjective1 = document.getElementById(stories[2].words[0].replace(/\s/g,'').toLowerCase()).value;

     adjective2 = document.getElementById(stories[2].words[1].replace(/\s/g,'').toLowerCase()).value;

     articleofclothing = document.getElementById(stories[2].words[2].replace(/\s/g,'').toLowerCase()).value;

     number1 = document.getElementById(stories[2].words[3].replace(/\s/g,'').toLowerCase()).value;

     number2 = document.getElementById(stories[2].words[4].replace(/\s/g,'').toLowerCase()).value;

     pluralnoun1 = document.getElementById(stories[2].words[5].replace(/\s/g,'').toLowerCase()).value
     ;
     pluralnoun2 = document.getElementById(stories[2].words[6].replace(/\s/g,'').toLowerCase()).value;

    document.getElementById("readstory").innerHTML += "<p>Early tomorrow, a <span class='word'>"+adjective1+"</span> front will collide with a mass of hot <span class='word'>"+pluralnoun1+"</span> moving from the north. This means we can expect <span class='word'>"+adjective2+"</span> winds and occasional <span class='word'>"+pluralnoun2+"</span> by late afternoon. Wind velocity will be <span class='word'>"+number1+"</span> miles an hour, and the high temperature should be around <span class='word'>"+number2+"</span> degrees. So, if you're going out, you had better plan on wearing your <span class='word'>"+articleofclothing+"</span>.</p>";
    document.getElementById("readstory").innerHTML += "<input type='button' class='' id='createAnotherStory' value='Create Another Story' onclick='reloadStory()' />";
  }
  return false;
}
function provideWords(storyid)
{
  document.getElementById("storylist").style.display = "none";
  document.getElementById("providewords").style.display = "block";
  document.getElementById("providewords").innerHTML = "";
  words = document.getElementById("providewords").innerHTML;
  words += "Provide the following words:<br/><form name='provideWordsForm' id='provideWordsForm' onsubmit='return readStory(\""+storyid+"\")'>";
  for(w = 0; w < stories[storyid].words.length; w++)
  {
    wordId = stories[storyid].words[w].replace(/\s/g,'').toLowerCase();
    words += "<input type='text' name=\""+wordId+"\" id=\""+wordId+"\" placeholder=\""+stories[storyid].words[w]+"\" class='wordsTextBox' /><br/>";
  }
  words += "<input type='submit' id='readStoryBtn' value='Read Story' />";
  words += "</form>";
  document.getElementById("providewords").innerHTML = words;
}
document.getElementById("storylist").innerHTML += "<p>Choose a story:</p>";
for(s = 0; s < stories.length; s++)
{
  document.getElementById("storylist").innerHTML += "<h3 class='storytitle' onclick='provideWords(\""+s+"\")'>"+stories[s].title+"</h3>";
}

// /\s/g method I used but wasn't taught
// .replace/\s/g replaces white space inside a string
// \s matches a whitespace character
// g tells the js to replace it

// .toLowerCase converts a string to lowercase letters