"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Icon = ({ path, className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d={path} />
    </svg>
);

const ArrowLeftIcon = () => <Icon path="M19 12H5M12 19l-7-7 7-7" className="w-8 h-8" />;

const PortfolioPage = () => {
    const projects = [
        {
            title: "Project One",
            description: "A description for project one. This project was about creating a modern and responsive website for a client.",
            image: "/project1.jpg", // Add your actual image paths here
            link: "#"
        },
        {
            title: "Project Two",
            description: "A description for project two. This involved developing a mobile application with location tracking features.",
            image: "/project2.jpg",
            link: "#"
        },
        {
            title: "Project Three",
            description: "A description for project three. We built an AI-powered chatbot for customer service.",
            image: "/project3.jpg",
            link: "#"
        },
        {
            title: "Project Four",
            description: "A description for project four. This was a full-stack web application with a custom admin panel.",
            image: "/project4.jpg",
            link: "#"
        }
    ];

    return (
        <div className="min-h-screen bg-[#1a1a3d] text-white font-sans antialiased">
            <header className="bg-[#1a1a3d]/90 backdrop-blur-sm shadow-lg py-4 fixed top-0 left-0 right-0 z-50 border-b border-purple-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
                    <Link href="/" className="text-purple-400 hover:text-purple-300 transition-colors">
                        <ArrowLeftIcon />
                    </Link>
                    <h1 className="font-display text-2xl font-extrabold text-purple-400 ml-4">
                        Our Portfolio
                    </h1>
                </div>
            </header>

            <main className="pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-[#2a2a4d] rounded-lg shadow-xl overflow-hidden group hover:shadow-purple-500/20 transition-all duration-300">
                                <div className="relative h-64">
                                    <div className="relative w-full h-full">
                                        {/* Temporary placeholder until you add real images */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 animate-gradient-x">
                                            <div className="w-full h-full flex items-center justify-center">
                                                <span className="text-2xl font-bold text-white">{project.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <a 
                                            href={project.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-white font-bold py-3 px-6 border-2 border-purple-400 rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300"
                                        >
                                            View Project
                                        </a>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-display text-2xl font-semibold mb-2 text-purple-400">{project.title}</h3>
                                    <p className="text-gray-300">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PortfolioPage;
