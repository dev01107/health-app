const healthData = {
  healthIssues: {
    headache: {
      symptoms: "Persistent pain in head, sensitivity to light and sound",
      diagnosis: "Tension headache or migraine",
      treatment: "Rest, hydration, and prescribed medication",
      hospitals: [
        {
          id: 1,
          name: "City General Hospital",
          address: "123 Main St, City",
          contact: "555-0123",
          type: "General Hospital",
          rating: 4.5,
          reviews: 128,
          emergency: true,
          beds: 25,
          cost: 100
        },
        {
          id: 2,
          name: "Medical Center",
          address: "456 Park Ave, City",
          contact: "555-0124",
          type: "Specialty Clinic",
          rating: 4.8,
          reviews: 256,
          emergency: true,
          beds: 40,
          cost: 150
        },
        {
          id: 3,
          name: "Neurological Institute",
          address: "789 Brain St, City",
          contact: "555-0125",
          type: "Specialty Hospital",
          rating: 4.9,
          reviews: 312,
          emergency: false,
          beds: 15,
          cost: 200
        },
        {
          id: 4,
          name: "Downtown Health Center",
          address: "321 Oak Lane, City",
          contact: "555-0126",
          type: "General Hospital",
          rating: 4.3,
          reviews: 189,
          emergency: true,
          beds: 30,
          cost: 120
        }
      ],
      doctors: [
        {
          id: 1,
          name: "Dr. Sarah Smith",
          specialization: "Neurologist",
          contact: "555-1111",
          hospital: "City General Hospital",
          rating: 4.8,
          reviews: 156,
          availability: "Mon-Fri, 9AM-5PM",
          fee: 200
        },
        {
          id: 2,
          name: "Dr. Michael Johnson",
          specialization: "General Physician",
          contact: "555-2222",
          hospital: "Medical Center",
          rating: 4.6,
          reviews: 98,
          availability: "Mon-Sat, 10AM-6PM",
          fee: 150
        },
        {
          id: 3,
          name: "Dr. Emily Chen",
          specialization: "Neurologist",
          contact: "555-3333",
          hospital: "Neurological Institute",
          rating: 4.9,
          reviews: 234,
          availability: "Tue-Sat, 8AM-4PM",
          fee: 250
        },
        {
          id: 4,
          name: "Dr. James Wilson",
          specialization: "Pain Management",
          contact: "555-4444",
          hospital: "Downtown Health Center",
          rating: 4.7,
          reviews: 167,
          availability: "Mon-Fri, 11AM-7PM",
          fee: 180
        },
        {
          id: 5,
          name: "Dr. Lisa Martinez",
          specialization: "Neuropsychiatrist",
          contact: "555-5555",
          hospital: "Medical Center",
          rating: 4.8,
          reviews: 145,
          availability: "Wed-Sun, 9AM-5PM",
          fee: 220
        }
      ],
      medications: [
        { id: 1, name: "Ibuprofen 400mg" },
        { id: 2, name: "Acetaminophen 500mg" }
      ],
      reports: [
        { id: 1, name: "CT Scan", cost: 300 },
        { id: 2, name: "Blood Test", cost: 50 }
      ]
    },
    fever: {
      symptoms: "High temperature, chills, body aches",
      diagnosis: "Viral or bacterial infection",
      treatment: "Rest, hydration, and medication",
      hospitals: [
        {
          id: 1,
          name: "Community Hospital",
          address: "789 Main St, City",
          contact: "555-0125",
          type: "General Hospital",
          rating: 4.7,
          reviews: 245,
          emergency: true,
          beds: 35,
          cost: 800
        },
        {
          id: 2,
          name: "City Medical Center",
          address: "456 New Road, City",
          contact: "555-0127",
          type: "Multi-Specialty Hospital",
          rating: 4.6,
          reviews: 189,
          emergency: true,
          beds: 45,
          cost: 900
        }
      ],
      doctors: [
        {
          id: 1,
          name: "Dr. Kumar",
          specialization: "General Physician",
          contact: "555-3333",
          hospital: "Community Hospital",
          rating: 4.8,
          reviews: 178,
          availability: "Mon-Fri, 9AM-5PM",
          fee: 500
        },
        {
          id: 2,
          name: "Dr. Sharma",
          specialization: "Internal Medicine",
          contact: "555-3334",
          hospital: "City Medical Center",
          rating: 4.7,
          reviews: 145,
          availability: "Mon-Sat, 10AM-6PM",
          fee: 600
        }
      ],
      medications: [
        { id: 3, name: "Paracetamol 500mg" },
        { id: 4, name: "Aspirin 300mg" },
        { id: 5, name: "Ibuprofen 400mg" }
      ],
      reports: [
        { id: 3, name: "Blood Test", cost: 500 },
        { id: 4, name: "Urine Test", cost: 300 },
        { id: 5, name: "Chest X-Ray", cost: 800 }
      ]
    },
    cough: {
      symptoms: "Dry or wet cough, sore throat",
      diagnosis: "Viral infection or allergy",
      treatment: "Rest, warm fluids, and cough medicine",
      hospitals: [
        {
          id: 1,
          name: "Shri Hospital",
          address: "123 Old Road, City",
          contact: "555-0130",
          type: "General Hospital",
          rating: 4.5,
          reviews: 156,
          emergency: true,
          beds: 25,
          cost: 700
        }
      ],
      doctors: [
        {
          id: 1,
          name: "Dr. Verma",
          specialization: "Respiratory Specialist",
          contact: "555-3336",
          hospital: "Shri Hospital",
          rating: 4.6,
          reviews: 134,
          availability: "Tue-Sun, 9AM-5PM",
          fee: 800
        }
      ],
      medications: [
        { id: 6, name: "Cough Syrup 100ml" },
        { id: 7, name: "Dextromethorphan Tablet" }
      ],
      reports: [
        { id: 6, name: "Chest X-Ray", cost: 800 },
        { id: 7, name: "Sputum Culture", cost: 600 }
      ]
    },
    "बुखार": {
      symptoms: "तेज बुखार, ठंड लगना, शरीर में दर्द",
      diagnosis: "वायरल या बैक्टीरियल संक्रमण",
      treatment: "आराम, पानी का सेवन, और दवाएं",
      hospitals: [
        {
          id: 1,
          name: "सामुदायिक अस्पताल",
          address: "789 मुख्य मार्ग, शहर",
          contact: "555-0125",
          type: "सामान्य अस्पताल",
          rating: 4.7,
          reviews: 245,
          emergency: true,
          beds: 35,
          cost: 800
        },
        {
          id: 2,
          name: "शहर मेडिकल सेंटर",
          address: "456 नया मार्ग, शहर",
          contact: "555-0127",
          type: "बहु-विशेषज्ञ अस्पताल",
          rating: 4.6,
          reviews: 189,
          emergency: true,
          beds: 45,
          cost: 900
        }
      ],
      doctors: [
        {
          id: 1,
          name: "डॉ. कुमार",
          specialization: "सामान्य चिकित्सक",
          contact: "555-3333",
          hospital: "सामुदायिक अस्पताल",
          rating: 4.8,
          reviews: 178,
          availability: "सोम-शुक्र, सुबह 9 - शाम 5",
          fee: 500
        },
        {
          id: 2,
          name: "डॉ. शर्मा",
          specialization: "आंतरिक चिकित्सा विशेषज्ञ",
          contact: "555-3334",
          hospital: "शहर मेडिकल सेंटर",
          rating: 4.7,
          reviews: 145,
          availability: "सोम-शनि, सुबह 10 - शाम 6",
          fee: 600
        }
      ],
      medications: [
        { id: 3, name: "पैरासिटामोल 500mg" },
        { id: 4, name: "एस्पिरिन 300mg" },
        { id: 5, name: "आइबुप्रोफेन 400mg" }
      ],
      reports: [
        { id: 3, name: "रक्त परीक्षण", cost: 500 },
        { id: 4, name: "मूत्र परीक्षण", cost: 300 },
        { id: 5, name: "छाती का एक्स-रे", cost: 800 }
      ]
    },
    "खांसी": {
      symptoms: "सूखी या कफ वाली खांसी, गले में खराश",
      diagnosis: "वायरल संक्रमण या एलर्जी",
      treatment: "आराम, गर्म पानी, और खांसी की दवा",
      hospitals: [
        {
          id: 1,
          name: "श्री अस्पताल",
          address: "123 पुराना मार्ग, शहर",
          contact: "555-0130",
          type: "सामान्य अस्पताल",
          rating: 4.5,
          reviews: 156,
          emergency: true,
          beds: 25,
          cost: 700
        }
      ],
      doctors: [
        {
          id: 1,
          name: "डॉ. वर्मा",
          specialization: "श्वसन रोग विशेषज्ञ",
          contact: "555-3336",
          hospital: "श्री अस्पताल",
          rating: 4.6,
          reviews: 134,
          availability: "मंगल-रवि, सुबह 9 - शाम 5",
          fee: 800
        }
      ],
      medications: [
        { id: 6, name: "कफ सिरप 100ml" },
        { id: 7, name: "डेक्स्ट्रोमेथोरफन टैबलेट" }
      ],
      reports: [
        { id: 6, name: "छाती का एक्स-रे", cost: 800 },
        { id: 7, name: "कफ कल्चर टेस्ट", cost: 600 }
      ]
    },
    "सिरदर्द": {
      symptoms: "सिर में तेज दर्द, रोशनी और आवाज से परेशानी",
      diagnosis: "तनाव या माइग्रेन",
      treatment: "आराम, पर्याप्त पानी, और दवाएं",
      hospitals: [
        {
          id: 1,
          name: "न्यूरो केयर अस्पताल",
          address: "45 विकास मार्ग, नई दिल्ली",
          contact: "011-555-0123",
          type: "विशेषज्ञ अस्पताल",
          rating: 4.8,
          reviews: 342,
          emergency: true,
          beds: 50,
          cost: 1500
        },
        {
          id: 2,
          name: "आयुष मेडिकल सेंटर",
          address: "78 स्वास्थ्य नगर, नई दिल्ली",
          contact: "011-555-0124",
          type: "आयुर्वेदिक केंद्र",
          rating: 4.6,
          reviews: 256,
          emergency: false,
          beds: 30,
          cost: 800
        }
      ],
      doctors: [
        {
          id: 1,
          name: "डॉ. अनिल गुप्ता",
          specialization: "न्यूरोलॉजिस्ट",
          contact: "555-7777",
          hospital: "न्यूरो केयर अस्पताल",
          rating: 4.9,
          reviews: 189,
          availability: "सोम-शुक्र, सुबह 10 - शाम 6",
          fee: 1000
        },
        {
          id: 2,
          name: "डॉ. सुनीता शर्मा",
          specialization: "आयुर्वेद विशेषज्ञ",
          contact: "555-8888",
          hospital: "आयुष मेडिकल स���ंटर",
          rating: 4.7,
          reviews: 156,
          availability: "सोम-शनि, सुबह 9 - शाम 5",
          fee: 600
        }
      ],
      medications: [
        { id: 1, name: "डोलो 650mg" },
        { id: 2, name: "सिरदर्द निवारक आयुर्वेदिक टैबलेट" }
      ],
      reports: [
        { id: 1, name: "एमआरआई स्कैन", cost: 5000 },
        { id: 2, name: "सीटी स्कैन", cost: 3000 }
      ]
    },
    "पेट दर्द": {
      symptoms: "पेट में तेज दर्द, मितली, उल्टी",
      diagnosis: "गैस्ट्राइटिस या पेट का संक्रमण",
      treatment: "हल्का भोजन, दवाएं और आराम",
      hospitals: [
        {
          id: 1,
          name: "गैस्ट्रो सुपर स्पेशलिटी अस्पताल",
          address: "23 हेल्थ कॉलोनी, मुंबई",
          contact: "022-555-0125",
          type: "विशेषज्ञ अस्पताल",
          rating: 4.7,
          reviews: 289,
          emergency: true,
          beds: 40,
          cost: 2000
        },
        {
          id: 2,
          name: "जीवन आरोग्य केंद्र",
          address: "56 शांति मार्ग, मुंबई",
          contact: "022-555-0126",
          type: "सामान्य अस्पताल",
          rating: 4.5,
          reviews: 178,
          emergency: true,
          beds: 35,
          cost: 1200
        }
      ],
      doctors: [
        {
          id: 1,
          name: "डॉ. राजेश मेहता",
          specialization: "गैस्ट्रोएंटरोलॉजिस्ट",
          contact: "555-9999",
          hospital: "गैस्ट्रो सुपर स्पेशलिटी अस्पताल",
          rating: 4.8,
          reviews: 234,
          availability: "मंगल-रवि, सुबह 9 - शाम 7",
          fee: 1500
        },
        {
          id: 2,
          name: "डॉ. प्रीति पटेल",
          specialization: "सामान्य चिकित्सक",
          contact: "555-1010",
          hospital: "जीवन आरोग्य केंद्र",
          rating: 4.6,
          reviews: 145,
          availability: "सोम-शनि, सुबह 10 - शाम 6",
          fee: 800
        }
      ],
      medications: [
        { id: 1, name: "पैंटोप्राजोल 40mg" },
        { id: 2, name: "डाइजेस्टिव टैबलेट" }
      ],
      reports: [
        { id: 1, name: "अल्ट्रासाउंड", cost: 2000 },
        { id: 2, name: "एंडोस्कोपी", cost: 4000 }
      ]
    }
  }
};

export default healthData; 