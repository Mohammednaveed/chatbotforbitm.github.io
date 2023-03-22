
const data = {
    "intents": [
      {
        "tag": "greeting",
        "patterns": [
          "Hi",
          "Hey",
          "How are you",
          "Is anyone there?",
          "Hello",
          "Good day"
        ],
        "responses": [
          "Hey :)",
          "Hello, thanks for visiting BITM Protrol",
          "Hi there, what can I do for you?",
          "Hi there, how can I help?"
        ]
      },
      {
        "tag": "goodbye",
        "patterns": ["Bye", "See you later", "Goodbye"],
        "responses": [
          "See you later, thanks for visiting",
          "Have a nice day",
          "Bye! Come back again soon."
        ]
      },
      {
        "tag": "thanks",
        "patterns": ["Thanks", "Thank you", "That's helpful", "Thank's a lot!"],
        "responses": ["Happy to help!", "Any time!", "My pleasure"]
      },
      {
        "tag": "payments",
        "patterns": [
          "Do you take credit cards?",
          "Do you accept Mastercard?",
          "Can I pay with Paypal?",
          "Are you cash only?"
        ],
        "responses": [
          "We accept VISA, Mastercard and Paypal",
          "We accept most major credit cards, and Paypal"
        ]
      },
      {
        "tag": "funny",
        "patterns": [
          "Tell me a joke!",
          "Tell me something funny!",
          "Do you know a joke?"
        ],
        "responses": [
          "Why did the hipster burn his mouth? He drank the coffee before it was cool.",
          "What did the buffalo say when his son left for college? Bison."
        ]
      },
      {
        "tag": "BITM",
        "patterns": [
         "BITM",
         "Tell me about BITM"
        ],
        "responses": [
          "Ballari Institute of Technology and Management , an Autonomous college established in 1997",
          "BITM is Currently an Autonomous Institute providing Education for Various Technological and Management Courses"
        ]
      },
      {
        "tag": "Course",
        "patterns": [
         "Course",
         "Courses offered in BITM",
         "Courses offered",
         "Courses in BITM"
        ],
        "responses": [
          " There are Many Cousrse Offered in BITM like CSE,EEE,ECE,ME,AIML,AI,DS(Data Science) and MBA Course too Type any of the Course name to get Detailed Information"
        ]
      },
      {
        "tag": "CSE",
        "patterns":[
          "CSE",
          "Computer",
          "Computer SCience",
          "Computer SCience and Engineering"
        ],
        "responses":[
          "Computer Science and Engineering is 4 years Course , there is Huge Demand for CSE in BITM , Providing Huge Placement Offers",
          "Computer science focuses on the development and testing of software and software systems. It involves working with mathematical models, data analysis and security, algorithms, and computational theory. Computer scientists define the computational principles that are the basis of all software",
          "Visit https://bitm.edu.in/computer-science/  for More Details"
        ]
      },
      {
        "tag": "EEE",
        "patterns":[
          "EEE",
          "Electrical",
          "Electrical and Electronics",
          "Electrical and Electronics Engineering"
        ],
        "responses":[
          "Electronics engineers analyze the requirements and costs of electrical systems. Electrical engineers design, develop, test, and supervise the manufacture of electrical equipment, such as electric motors, radar and navigation systems, communications systems, or power generation equipment.",
          "Visit https://bitm.edu.in/electronics-communication/ for More Details"
        ]
      },
      {
        "tag": "ECE",
        "patterns":[
          "ECE",
          "Electronics and Communication",
          "Electronics and Communication Engineering"
        ],
        "responses":[
          "Electronics and Communication is 4 Years and 8 Semester Course The Department of Electronics & Communication Engineering shall strive to create engineering technocrats for addressing the global challenges in relevant areas to cater the ever-changing needs of society at National and International levels. For More Details visit https://bitm.edu.in/electronics-communication/ "
        ]
      },
      {
        "tag": "ME",
        "patterns":[
          "ME",
          "Mechanical",
          "Mechanical Engineering"
        ],
        "responses":[
          " This Course provides an ability to identify, formulate, and solve complex engineering problems by applying principles of engineering, science, and mathematics , an ability to apply engineering design to produce solutions that meet specified needs with consideration of public health, safety, and welfare, as well as global, cultural, social, environmental, and economic factorsVisit for More Details https://bitm.edu.in/mechanical-engineering/"
        ]
      },
      {
        "tag": "civil",
        "patterns":[
          "CV",
          "CVE",
          "Civil Engineering"
        ],
        "responses":[
          "Civil Engineering is 4 Years and 8 sem Course",
          "Educate new generations of civil engineers to meet the challenges, demands, and expectations of our global society, Cultivate, enrich and promote scholarship, responsibility and service among our graduates",
          " For More Details Visit https://bitm.edu.in/civil-engineering/ Website"
        ]
      },
      {
        "tag": "AIML",
        "patterns":[
          "AIML",
          "Artificial Engineering",
          "Artificial Intelligence" ,
          "Artificial Intelligence and Engineering"
        ],
        "responses":[
          "The objective of general AI is to design a system capable of thinking for itself just like humans do. Currently, general AI is still under research, and efforts are being made to develop machines that have enhanced cognitive capabilities.",
          "AIML has Huge Demand all over World Providing big pool of Oppurtunities for all the Students",
          "AIML is 4 years and 8 Sem Duration Course offering Knowledge of Aritificial Intelligence and Mechine Learning"
        ]
      },
      {
        "tag": "DataScience",
        "patterns":[
          "DSE",
          "Data Science",
          "Data SCience and Engineering"
        ],
        "responses":[
          "Data Science is New Brance Offered by our College which is 4 years and 8 sem Duration Course which provides all the Knowledge of Data Scientist to process the Data and provide the Specified Results",
          "data scientist is to explore, sort and analyze megadata from various sources in order to take advantage of them and reach conclusions to optimize business processes or for decision support."
        ]
      },
      {
        "tag": "HODs",
        "patterns":[
          "HODs",
          "Head of Departments"
        ],
        "responses":[
          " Dr. R N Kulkarni - HOD of CSE Dept. \n Dr. K M Sadyojatha - HOD of ECE Dept. \n Dr. Vidyavati - HOD of AIML "
        ]
      },
      {
        "tag": "Principal",
        "patterns":[
          "Principal",
          "Principal of BITM"
        ],
        "responses":[
          "Dr. Yadavalli Basavaraj"
        ]
      },
      {
        "tag": "Director",
        "patterns":[
          "Director",
          "Director of BITM"
        ],
        "responses":[
          "Dr. Yashvanth Bhupal , MS,Ph. D,MIE,MISTE"
        ]
      },
      {
        "tag": "DD",
        "patterns":[
          "DD",
          "Deputy Director",
          "Deputy Director of BITM"
        ],
        "responses":[
          "PROF. PRITHVIRAJ. Y.J, Trustee, Dy. Director, BITM, Bellary"
        ]
      }
    ]
  };
  
  // Function to match question with data
  function matchQuestion(question) {
    // Loop through each intent
    for (let intent of data.intents) {
      // Loop through each pattern
      for (let pattern of intent.patterns) {
        // Calculate the similarity between the question and the pattern
        const similarity = getSimilarity(question, pattern);
        // If similarity is above a certain threshold, return the response
        if (similarity >= 0.5) {
          return getRandomResponse(intent.responses);
        }
      }
    }
    // If no match is found, return a default response
    return "Sorry, I didn't understand your question.";
  }
  
  function getSimilarity(str1, str2) {
    const words1 = str1.toLowerCase().split(/\W+/);
    const words2 = str2.toLowerCase().split(/\W+/);
    const intersection = new Set(words1.filter(word => words2.includes(word)));
    const union = new Set([...words1, ...words2]);
    return intersection.size / union.size;
  }
  function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
  }
function talk() {  
  var user = document.getElementById("userBox").value;
    document.getElementById("chatLog").innerHTML = user + "<br>";
    const answer = matchQuestion(user);
    if (answer === "Sorry, I didn't understand your question.") {
        document.getElementById("chatLog").innerHTML =
            "Sorry,I didn't understand Try Typing Hi, Courses, HODs, Principal, CSE, ECE, EEE, ME, CV, DS, Director, Deputy Director(DD) and etc. <br>";
    }   else {
        document.getElementById("chatLog").innerHTML = answer + "<br>";
    }
}