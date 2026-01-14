import React, { useState } from "react";
import { MdCalendarToday, MdPerson, MdVisibility } from "react-icons/md";
import { IoArrowForward } from "react-icons/io5";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [showAllPosts, setShowAllPosts] = useState(false);

  const blogPosts = [
    // Tech Posts
    {
      id: 1,
      title: "Building Scalable Web Applications with React & Node.js",
      excerpt: "Learn how to architect and build production-ready web applications that scale seamlessly...",
      content: "A comprehensive guide to building scalable web applications using modern tech stack.",
      category: "tech",
      author: "Vivek Kumar",
      date: "Jan 15, 2025",
      readTime: "12 min read",
      views: 2543,
      image: "🚀",
      tags: ["React", "Node.js", "Architecture"],
      url: "https://medium.com/search?q=Building+Scalable+Web+Applications+React+Node.js",
    },
    {
      id: 2,
      title: "AI and Machine Learning: The Tech Revolution",
      excerpt: "Understanding AI/ML technologies and their impact on the tech industry and beyond...",
      content: "Deep dive into artificial intelligence and machine learning technologies.",
      category: "tech",
      author: "Vivek Kumar",
      date: "Jan 12, 2025",
      readTime: "16 min read",
      views: 5643,
      image: "🤖",
      tags: ["AI", "ML", "Technology"],
      url: "https://medium.com/search?q=AI+Machine+Learning+Tech+Revolution",
    },
    {
      id: 3,
      title: "Web Development Trends 2025: What's Next?",
      excerpt: "Exploring the latest frameworks, tools, and best practices shaping modern web development...",
      content: "Comprehensive analysis of emerging web development trends and technologies.",
      category: "tech",
      author: "Vivek Kumar",
      date: "Jan 9, 2025",
      readTime: "13 min read",
      views: 4200,
      image: "⚙️",
      tags: ["Web Dev", "Trends", "Tools"],
      url: "https://medium.com/search?q=Web+Development+Trends+2025",
    },
    
    // Business Posts
    {
      id: 4,
      title: "Startup Idea to Launch: An Entrepreneur's Journey",
      excerpt: "From concept to market: How to validate, fund, and launch your tech startup successfully...",
      content: "A complete guide to launching your tech business and managing growth.",
      category: "business",
      author: "Vivek Kumar",
      date: "Jan 14, 2025",
      readTime: "10 min read",
      views: 4521,
      image: "🏢",
      tags: ["Business", "Startup", "Growth"],
      url: "https://medium.com/search?q=Startup+Idea+Launch+Entrepreneurs+Journey",
    },
    {
      id: 5,
      title: "Building Product-Market Fit: Lessons from Successful Founders",
      excerpt: "Discover the strategies top founders use to find and achieve product-market fit...",
      content: "Strategic insights on achieving product-market fit and scaling your business.",
      category: "business",
      author: "Vivek Kumar",
      date: "Jan 11, 2025",
      readTime: "11 min read",
      views: 3800,
      image: "📊",
      tags: ["Product", "Business Strategy", "Growth"],
      url: "https://medium.com/search?q=Product+Market+Fit+Lessons+Founders",
    },
    {
      id: 6,
      title: "Scaling Your Team: Hiring and Leadership Tips",
      excerpt: "Build a high-performing team and develop leadership skills for rapid growth...",
      content: "Essential guides for hiring, team management, and organizational scaling.",
      category: "business",
      author: "Vivek Kumar",
      date: "Jan 7, 2025",
      readTime: "14 min read",
      views: 2950,
      image: "👥",
      tags: ["Leadership", "Hiring", "Team"],
      url: "https://medium.com/search?q=Scaling+Team+Hiring+Leadership",
    },
    
    // Finance Posts
    {
      id: 7,
      title: "Smart Investing for Developers: A Beginner's Guide",
      excerpt: "Learn financial literacy and smart investment strategies tailored for tech professionals...",
      content: "Essential investment and finance knowledge for developers and tech professionals.",
      category: "finance",
      author: "Vivek Kumar",
      date: "Jan 13, 2025",
      readTime: "15 min read",
      views: 3124,
      image: "💰",
      tags: ["Finance", "Investing", "Money"],
      url: "https://medium.com/search?q=Smart+Investing+Developers+Beginners+Guide",
    },
    {
      id: 8,
      title: "Understanding Cryptocurrency and Blockchain Technology",
      excerpt: "Demystify crypto and blockchain: Understanding the technology and investment opportunities...",
      content: "Complete guide to cryptocurrency, blockchain, and their financial implications.",
      category: "finance",
      author: "Vivek Kumar",
      date: "Jan 10, 2025",
      readTime: "17 min read",
      views: 5200,
      image: "🪙",
      tags: ["Crypto", "Blockchain", "Finance"],
      url: "https://medium.com/search?q=Cryptocurrency+Blockchain+Technology",
    },
    {
      id: 9,
      title: "Building Passive Income Streams as a Tech Professional",
      excerpt: "Explore multiple income streams and financial independence strategies for tech workers...",
      content: "Strategies for creating passive income and achieving financial independence.",
      category: "finance",
      author: "Vivek Kumar",
      date: "Jan 6, 2025",
      readTime: "12 min read",
      views: 3650,
      image: "💵",
      tags: ["Passive Income", "Financial Freedom", "Money"],
      url: "https://medium.com/search?q=Passive+Income+Tech+Professional",
    },
    
    // Career Posts
    {
      id: 10,
      title: "How to Build a Personal Brand in Tech",
      excerpt: "Master the art of establishing your tech career and creating a compelling professional presence...",
      content: "Strategies for building your personal brand and advancing your tech career.",
      category: "career",
      author: "Vivek Kumar",
      date: "Jan 12, 2025",
      readTime: "8 min read",
      views: 1832,
      image: "💼",
      tags: ["Career", "Personal Brand", "Growth"],
      url: "https://medium.com/search?q=Personal+Brand+Tech+Career",
    },
    {
      id: 11,
      title: "Negotiating Your Salary: A Tech Professional's Guide",
      excerpt: "Learn proven techniques to negotiate higher salaries and better benefits in tech...",
      content: "Comprehensive guide to salary negotiation and compensation strategies.",
      category: "career",
      author: "Vivek Kumar",
      date: "Jan 8, 2025",
      readTime: "9 min read",
      views: 4100,
      image: "📈",
      tags: ["Salary", "Negotiation", "Career"],
      url: "https://medium.com/search?q=Salary+Negotiation+Tech+Professional",
    },
    {
      id: 12,
      title: "Switching Careers to Tech: Step-by-Step Roadmap",
      excerpt: "A practical guide for career changers entering the tech industry with confidence...",
      content: "Complete roadmap for transitioning into a tech career from other fields.",
      category: "career",
      author: "Vivek Kumar",
      date: "Jan 4, 2025",
      readTime: "13 min read",
      views: 6200,
      image: "🛣️",
      tags: ["Career Switch", "Learning", "Roadmap"],
      url: "https://medium.com/search?q=Switching+Careers+Tech+Roadmap",
    },
    
    // Thoughts Posts
    {
      id: 13,
      title: "Lessons I Learned from Building 5 Products",
      excerpt: "Reflections on product development, failures, and what I'd do differently next time...",
      content: "Personal thoughts and lessons from years of product building and entrepreneurship.",
      category: "thoughts",
      author: "Vivek Kumar",
      date: "Jan 5, 2025",
      readTime: "14 min read",
      views: 2876,
      image: "💭",
      tags: ["Reflection", "Lessons", "Experience"],
      url: "https://medium.com/search?q=Building+Products+Lessons+Learned",
    },
    {
      id: 14,
      title: "The Importance of Continuous Learning in Tech",
      excerpt: "Why staying current with technology trends is crucial for long-term success...",
      content: "Reflections on the importance of lifelong learning and skill development.",
      category: "thoughts",
      author: "Vivek Kumar",
      date: "Jan 3, 2025",
      readTime: "10 min read",
      views: 2100,
      image: "📚",
      tags: ["Learning", "Growth Mindset", "Personal Development"],
      url: "https://medium.com/search?q=Continuous+Learning+Tech+Importance",
    },
    {
      id: 15,
      title: "Work-Life Balance: Finding Your Sweet Spot in Tech",
      excerpt: "Honest thoughts on maintaining mental health, productivity, and life balance...",
      content: "Personal perspective on work-life balance and mental wellness in tech.",
      category: "thoughts",
      author: "Vivek Kumar",
      date: "Jan 1, 2025",
      readTime: "11 min read",
      views: 3400,
      image: "⚖️",
      tags: ["Work-Life Balance", "Wellness", "Mental Health"],
      url: "https://medium.com/search?q=Work-Life+Balance+Tech+Mental+Health",
    },
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "tech", label: "Tech" },
    { id: "business", label: "Business" },
    { id: "finance", label: "Finance" },
    { id: "career", label: "Career" },
    { id: "thoughts", label: "Thoughts" },
  ];

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts.filter((post, index, self) => 
          self.findIndex(p => p.category === post.category) === index
        ).slice(0, showAllPosts ? undefined : 3)
      : blogPosts.filter((post) => post.category === selectedCategory);

  const toggleLike = (postId) => {
    setLikedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  return (
    <section id="blog" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-sky-400/20 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-indigo-400/20 rounded-full blur-3xl animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            <span className="text-white">Latest </span>
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Articles</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Explore in-depth articles about web development, design patterns, and emerging technologies
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/50"
                  : "bg-slate-800/50 text-gray-300 border border-slate-700/50 hover:border-cyan-400/40 hover:text-cyan-300"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <div
              key={post.id}
              className="group relative h-full"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Card Content */}
              <div className="relative h-full bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-slate-700 group-hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 flex flex-col">
                {/* Top Gradient Border */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Image/Icon Section with Border */}
                <div className="relative h-40 bg-slate-800 border-b border-slate-700 group-hover:border-cyan-500/30 flex items-center justify-center overflow-hidden">
                  <span className="text-6xl transform group-hover:scale-125 transition-transform duration-300">
                    {post.image}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Category Tag */}
                  <div className="mb-3">
                    <span className="px-3 py-1 rounded-md bg-slate-800 text-cyan-400 text-xs font-semibold border border-slate-700 uppercase tracking-wider group-hover:border-cyan-400/50">
                      {post.category.replace("-", " ")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-cyan-400 bg-slate-800 px-2 py-1 rounded border border-slate-700"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div className="border-t border-slate-700 pt-4 mb-4">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <MdCalendarToday size={14} />
                          <span>{post.date}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 hover:text-cyan-400 transition-colors cursor-pointer">
                          <MdVisibility size={14} />
                          <span>{post.views}</span>
                        </div>
                        <button
                          onClick={() => toggleLike(post.id)}
                          className="flex items-center gap-1 hover:text-red-400 transition-colors cursor-pointer"
                        >
                          <span className="text-lg">
                            {likedPosts.has(post.id) ? "❤️" : "🤍"}
                          </span>
                        </button>
                      </div>
                      <div className="flex items-center gap-1">
                        <MdPerson size={14} />
                        <span>{post.author}</span>
                      </div>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-cyan-400 border border-slate-700 hover:border-cyan-500 hover:bg-slate-700 font-semibold transition-all duration-300 group/btn"
                  >
                    <span>Read Article</span>
                    <IoArrowForward
                      size={18}
                      className="transform group-hover/btn:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Posts Button */}
        {selectedCategory === "all" && !showAllPosts && (
          <div className="mt-16 text-center">
            <button 
              onClick={() => setShowAllPosts(true)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <span>View All Articles</span>
              <IoArrowForward size={20} />
            </button>
          </div>
        )}
        
        {selectedCategory === "all" && showAllPosts && (
          <div className="mt-16 text-center">
            <button 
              onClick={() => setShowAllPosts(false)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-700 hover:to-indigo-700 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <span>Show Less</span>
            </button>
          </div>
        )}
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Blog;
