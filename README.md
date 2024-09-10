# Interview Expert 🎓💼

A platform designed to help college students prepare for real-world interviews with AI-driven mock interviews, code editor practice, and document analysis tools.

## Inspiration 🧠

In today's competitive job market, college students need to be more prepared than ever for interviews. Many students struggle with nerves, lack of experience, and uncertainty about what to expect. **Interview Expert** was created to bridge this gap by providing a comprehensive platform where students can practice and refine their interview skills, ensuring they are well-prepared for their dream jobs.

## Main Features & How They Are Different From Other Interview Preparation Platforms:

### 1. Chat PDF 🗣️📄
- Analyze technical documents, research papers, or any other PDFs by chatting with them. This tool helps you understand complex content and prepares you to discuss these documents in an interview setting.
<img width="700" alt="Screenshot 2024-08-12 at 10 03 56 PM" src="https://github.com/user-attachments/assets/505e1a07-1abf-404b-a58e-fe5a975506a7">

### 2. Choose Your Interview Type 🎤
- **Peer-to-Peer Interview**: Connect with other students and practice interviews in real-time, gaining valuable experience and feedback from peers.
- **AI-Powered Interview**: Simulate a real interview experience with our AI, which provides instant analysis and feedback on your performance.

<img src="https://github.com/user-attachments/assets/9e939065-f887-44d9-9b62-ac217b0ad6e0" width="700" height="auto" alt="Choose Your Interview Type">

### 3. Code Editor 💻
- Practice coding problems directly in our integrated code editor. Get comfortable with solving problems in a timed environment, similar to what you'd experience in technical interviews.
<img width="700" alt="Screenshot 2024-08-12 at 9 54 39 PM" src="https://github.com/user-attachments/assets/e685e9f6-0a3b-4650-a0e8-494b2e013b16">

### 4. Get Feedback and Improve 📈
- After completing your mock interview, receive detailed feedback that highlights your strengths and areas for improvement. Use this to refine your approach and improve with every practice session.

<img src="https://github.com/user-attachments/assets/588aa777-6ee4-4fcd-ba76-dba7e8dc7214" width="700" height="auto" alt="Choose Your Interview Type">

## How We Built It 💪

- **Frontend**: React, Next.js, TailwindCSS, ShadCN
- **Backend**: Node.js, Next.js API
- **Database**: PostgreSQL
- **AI**: Gemini API (for AI-powered interviews), Langchain, Pinecone
- **Authentication**: NextAuth, Google Identity API

## Challenges We Ran Into 🥺

- **AI Integration**: Ensuring the AI provided relevant and constructive feedback required extensive training and fine-tuning.

## Accomplishments We're Proud Of 🥰

- Successfully integrated multiple AI-driven features that provide instant responses to users.
- Created a seamless, user-friendly experience that allows students to practice interviews, code, and document analysis in one place.
- Developed a robust feedback system that helps users continuously improve.

## What We Learned 💡

- **AI Implementation**: Deepened our understanding of integrating AI into practical applications.
- **User-Centered Design**: Focused on creating an intuitive interface that meets the needs of college students.
- **Collaboration**: Enhanced our teamwork and remote collaboration skills, ensuring that every team member's contribution was valued.

## What's Next for Interview Expert 🤫

- **Expand AI Capabilities**: Further improve the AI's feedback mechanisms by incorporating more nuanced analysis.
- **Mobile App**: Develop a mobile version of Interview Expert for on-the-go practice.
- **Additional Features**: Implement more features like group interviews, advanced coding problems, and personalized learning paths.

## Contributing Guidelines 🛠️

Please refer to [CONTRIBUTING.md](CONTRIBUTING.md) for detailed information on how to contribute to this project.

## How to Run the Code

Follow these steps to get the Interview Expert platform up and running on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 14 or above)
- **npm** (comes with Node.js)
- **Git** (optional, for cloning the repository)

### 1. Clone the Repository

If you haven't already cloned the repository, run the following command:

```bash
git clone https://github.com/phananhnguyen1204/interview-expert.git
```

Then navigate into the project directory:

```bash
cd interview-expert
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables
Create a .env file in the root of the project and add the following environment variables:

```bash
NEXT_PUBLIC_API_URL=your_api_url_here
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
NEXT_PUBLIC_PINECONE_API_KEY=your_pinecone_api_key_here
```

### 4. Start the Development Server
Run the following command to start the development server:

```bash
npm run dev
```
The application will start on http://localhost:3000. Open this URL in your browser to view the app.





This project follows the all-contributors specification. Contributions of any kind are welcome!

---
