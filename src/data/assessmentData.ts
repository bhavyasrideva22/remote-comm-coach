import { Question } from "@/components/AssessmentQuestion";

export const assessmentData = {
  questions: [
    // Communication Intelligence Section
    {
      id: "comm_1",
      type: "likert" as const,
      category: "Communication Intelligence",
      title: "Digital Message Clarity",
      content: "I express my ideas clearly when communicating remotely.",
      scale: {
        min: 1,
        max: 5,
        minLabel: "Strongly Disagree",
        maxLabel: "Strongly Agree"
      }
    },
    {
      id: "comm_2",
      type: "scenario" as const,
      category: "Communication Intelligence",
      title: "Email Tone Interpretation",
      description: "Understanding tone in digital communications",
      content: "You receive an email from a colleague that reads: 'I'm not sure this approach works.' How do you interpret the tone?",
      options: [
        { 
          value: "neutral", 
          label: "Neutral concern, open to discussion",
          description: "The colleague is expressing uncertainty and inviting dialogue" 
        },
        { 
          value: "frustrated", 
          label: "Frustration or disagreement",
          description: "There's underlying tension or pushback" 
        },
        { 
          value: "sarcastic", 
          label: "Sarcasm or passive aggression",
          description: "The message contains hidden criticism" 
        },
        { 
          value: "confused", 
          label: "Confusion due to lack of context",
          description: "The message is unclear without more information" 
        }
      ]
    },
    {
      id: "comm_3",
      type: "likert" as const,
      category: "Communication Intelligence",
      title: "Virtual Meeting Focus",
      content: "I find it easy to stay focused during virtual meetings.",
      scale: {
        min: 1,
        max: 5,
        minLabel: "Strongly Disagree",
        maxLabel: "Strongly Agree"
      }
    },
    {
      id: "comm_4",
      type: "multiple_choice" as const,
      category: "Communication Intelligence",
      title: "Supportive Messaging",
      content: "Which tone in a Slack message is most likely to be perceived as supportive?",
      options: [
        { value: "urgent", label: "Please fix this ASAP." },
        { value: "collaborative", label: "Could we try adjusting this part? Thanks!" },
        { value: "direct", label: "This is wrong." },
        { value: "skeptical", label: "I don't think this will work." }
      ]
    },
    {
      id: "comm_5",
      type: "likert" as const,
      category: "Communication Intelligence",
      title: "Tone Adaptation",
      content: "I adjust my tone depending on whether I'm emailing, chatting, or on video calls.",
      scale: {
        min: 1,
        max: 5,
        minLabel: "Strongly Disagree",
        maxLabel: "Strongly Agree"
      }
    },

    // Collaboration Intelligence Section
    {
      id: "collab_1",
      type: "scenario" as const,
      category: "Collaboration Intelligence",
      title: "Meeting Interruption Management",
      description: "Handling disruptive behavior in virtual meetings",
      content: "During a virtual project meeting, one teammate repeatedly interrupts others and dominates conversation. What is your best course of action?",
      options: [
        { 
          value: "avoid", 
          label: "Let it continue to avoid confrontation",
          description: "Maintain harmony by not addressing the issue directly" 
        },
        { 
          value: "direct", 
          label: "Politely suggest taking turns speaking",
          description: "Address the behavior diplomatically in the moment" 
        },
        { 
          value: "private", 
          label: "Message the team leader privately",
          description: "Escalate through proper channels" 
        },
        { 
          value: "withdraw", 
          label: "Withdraw from the meeting to avoid conflict",
          description: "Remove yourself from the situation" 
        }
      ]
    },
    {
      id: "collab_2",
      type: "multiple_choice" as const,
      category: "Collaboration Intelligence",
      title: "Asynchronous Collaboration Style",
      content: "When collaborating asynchronously, you:",
      options: [
        { value: "reactive", label: "Wait for others to initiate communication" },
        { value: "proactive", label: "Proactively share updates and check in" },
        { value: "avoidant", label: "Avoid video calls whenever possible" },
        { value: "limited", label: "Rely only on emails, avoiding chats or calls" }
      ]
    },
    {
      id: "collab_3",
      type: "likert" as const,
      category: "Collaboration Intelligence",
      title: "Tool Adaptability",
      content: "I adapt quickly to new remote collaboration tools.",
      scale: {
        min: 1,
        max: 5,
        minLabel: "Strongly Disagree",
        maxLabel: "Strongly Agree"
      }
    },
    {
      id: "collab_4",
      type: "likert" as const,
      category: "Collaboration Intelligence",
      title: "Remote Trust Building",
      content: "I trust my teammates to meet deadlines even without in-person oversight.",
      scale: {
        min: 1,
        max: 5,
        minLabel: "Strongly Disagree",
        maxLabel: "Strongly Agree"
      }
    },
    {
      id: "collab_5",
      type: "likert" as const,
      category: "Collaboration Intelligence",
      title: "Remote Conflict Resolution",
      content: "I address conflicts openly and respectfully during remote work.",
      scale: {
        min: 1,
        max: 5,
        minLabel: "Strongly Disagree",
        maxLabel: "Strongly Agree"
      }
    },

    // Contextual Intelligence Section
    {
      id: "context_1",
      type: "likert" as const,
      category: "Contextual Intelligence",
      title: "One-on-One Virtual Conversations",
      content: "I communicate effectively in private virtual conversations with colleagues.",
      scale: {
        min: 1,
        max: 5,
        minLabel: "Strongly Disagree",
        maxLabel: "Strongly Agree"
      }
    },
    {
      id: "context_2",
      type: "scenario" as const,
      category: "Contextual Intelligence",
      title: "Digital Conflict Navigation",
      description: "Managing disagreements in remote settings",
      content: "You're in a heated email exchange with a colleague about project priorities. The tone is becoming tense. What's your best approach?",
      options: [
        { 
          value: "call", 
          label: "Suggest switching to a video call",
          description: "Move to a more personal communication channel" 
        },
        { 
          value: "formal", 
          label: "Keep the discussion formal and factual",
          description: "Maintain professional boundaries in writing" 
        },
        { 
          value: "delay", 
          label: "Take a break and respond later",
          description: "Allow time for emotions to cool down" 
        },
        { 
          value: "escalate", 
          label: "Include your manager in the conversation",
          description: "Bring in a neutral third party" 
        }
      ]
    },
    {
      id: "context_3",
      type: "likert" as const,
      category: "Contextual Intelligence",
      title: "Group Video Participation",
      content: "I participate effectively in large group video calls and webinars.",
      scale: {
        min: 1,
        max: 5,
        minLabel: "Strongly Disagree",
        maxLabel: "Strongly Agree"
      }
    },
    {
      id: "context_4",
      type: "likert" as const,
      category: "Contextual Intelligence",
      title: "Async Communication Responsiveness",
      content: "I respond to messages and emails in a timely manner when working remotely.",
      scale: {
        min: 1,
        max: 5,
        minLabel: "Strongly Disagree",
        maxLabel: "Strongly Agree"
      }
    },

    // COACH Framework Integration
    {
      id: "coach_1",
      type: "likert" as const,
      category: "COACH Framework",
      title: "Clarity & Comprehension",
      content: "I make sure my messages are clear and easy to understand remotely.",
      scale: {
        min: 1,
        max: 5,
        minLabel: "Strongly Disagree",
        maxLabel: "Strongly Agree"
      }
    },
    {
      id: "coach_2",
      type: "likert" as const,
      category: "COACH Framework", 
      title: "Openness & Feedback",
      content: "I welcome feedback given over chat or email without defensiveness.",
      scale: {
        min: 1,
        max: 5,
        minLabel: "Strongly Disagree",
        maxLabel: "Strongly Agree"
      }
    }
  ] as Question[]
};