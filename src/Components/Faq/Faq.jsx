import React from "react";

const Faq = () => {
  const faqs = [
    {
      question: "How do I add a new book to my shelf?",
      answer:
        "Navigate to the 'Add Book' page from the menu, fill in the book details, and submit the form. Your book will appear in your bookshelf.",
    },
    {
      question: "Can I edit or delete books I've added?",
      answer:
        "Yes, on your 'My Books' page, you can update or remove any book you have added.",
    },
    {
      question: "Is Smart Shelf free to use?",
      answer: "Yes, Smart Shelf is completely free for all users.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Go to the login page and click on 'Forgot Password' to receive instructions via email.",
    },
    {
      question: "Who can see my book collection?",
      answer:
        "Only you can see your personal book collection unless you share it with others.",
    },
    
    {
      question: "What happens if I accidentally delete a book?",
      answer:
        "Once a book is deleted from your bookshelf, it cannot be recovered. Please be sure before confirming deletion.",
    },
    {
      question: "Can I update book details after adding them?",
      answer:
        "Yes, you can edit any book details like title, author, or category anytime from your 'My Books' page.",
    },
    {
      question: "Are there any restrictions on the book data I can add?",
      answer:
        "Please provide accurate book information. Some fields may have limits, like character length or required formats.",
    },
    {
      question: "How is the book data stored securely?",
      answer:
        "All your book information is securely stored in our database with authentication protecting your data.",
    },
    {
      question: "Can I view my book history or changes?",
      answer:
        "Currently, there is no version history, so edits overwrite previous data. Consider saving copies externally if needed.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 mt-15 mb-20">
      <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map(({ question, answer }, index) => (
          <details
            key={index}
            className="collapse collapse-arrow border border-gray-300 rounded-lg bg-white shadow-md"
          >
            <summary className="collapse-title text-lg font-semibold text-indigo-700 cursor-pointer hover:text-pink-600 transition-colors">
              {question}
            </summary>
            <div className="collapse-content text-gray-700 px-4 py-2">
              <p>{answer}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Faq;
