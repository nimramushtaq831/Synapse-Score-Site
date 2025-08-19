// ===== NAVBAR CONFIGURATION DATA =====
// All menu items, descriptions, images, and submenus are defined here

const navbarConfig = {
    // Leadership Menu Configuration
    leadership: {
        id: 'leadershipDropdown',
        title: 'Leadership',
        defaultDescription: 'Assess leadership potential using psychometric insights that help uncover how individuals think, lead, and make decisions.',
        defaultImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=200&fit=crop&crop=face',
        items: [
            {
                title: 'Discover your communication Power',
                description: 'Master the art of effective communication through structured messaging, clear task delegation, adaptable approaches, and strong relationship building.',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=face',
                url: '../pages/Synapscore/Discover-Your-Communication-Power.html'
            },
            {
                title: 'Discover Your Leader Within',
                description: 'Unlock your innate leadership potential through self-awareness, emotional intelligence, and understanding your unique leadership style.',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop&crop=face',
                url: '../pages/leadership/index.html'
            },
            {
                title: 'Leadership Traits',
                description: 'Explore the core characteristics that define exceptional leaders: vision, integrity, resilience, empathy, and decision-making capability.',
                image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop&crop=faces',
                hasSubmenu: true,
                submenu: {
                    id: 'leadership-traits',
                    title: 'Leadership Traits',
                    type: 'single-column',
                    items: [
                        {
                            title: 'Creative vs. Conservative',
                            description: 'Discover whether you lean toward innovative, out-of-the-box thinking or prefer traditional, proven approaches to leadership challenges.',
                            image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop&crop=faces',
                            url: '../pages/Leadership-Traits/creative-vs-conservative.html'
                        },
                        {
                            title: 'Customer-Centric vs. Process-Centric',
                            description: 'Understand your focus: prioritizing customer needs and satisfaction versus optimizing internal processes and operational efficiency.',
                            image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop&crop=faces',
                            url: '../pages/Leadership-Traits/customer-centric-process-centric.html'
                        },
                        {
                            title: 'Flexible vs. Reliable',
                            description: 'Assess your leadership style: adapting quickly to changing circumstances versus maintaining consistency and dependable approaches.',
                            image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop&crop=faces',
                            url: '../pages/Leadership-Traits/flexible-reliable.html'
                        },
                        {
                            title: 'Foresight vs. Responsive',
                            description: 'Evaluate your perspective: anticipating future trends and opportunities versus responding effectively to current situations and immediate needs.',
                            image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop&crop=faces',
                            url: '../pages/Leadership-Traits/foresight-responsive.html'
                        },
                        {
                            title: 'Growth-Focused vs. Directive',
                            description: 'Identify your approach: driving expansion and development initiatives versus providing clear direction and structured guidance to teams.',
                            image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop&crop=faces',
                            url: '../pages/Leadership-Traits/growth-focused-directive.html'
                        },
                        {
                            title: 'People-Focused vs. Goal-Oriented',
                            description: 'Determine your priority: emphasizing team development and relationships versus concentrating on achieving specific objectives and results.',
                            image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop&crop=faces',
                            url: '../pages/Leadership-Traits/people-focused-vs-goal-oriented.html'
                        },
                        {
                            title: 'Risk-Taking vs. Risk-Averse',
                            description: 'Understand your risk profile: embracing uncertainty and bold decisions versus preferring cautious, well-calculated approaches to challenges.',
                            image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop&crop=faces',
                            url: '../pages/Leadership-Traits/risk-taking-vs-risk-averse.html'
                        },
                        {
                            title: 'Visionary vs. Execution-Focused',
                            description: 'Discover your strength: creating inspiring long-term vision and strategy versus excelling at implementing plans and delivering concrete results.',
                            image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop&crop=faces',
                            url: '../pages/Leadership-Traits/visionary-vs-execution-focused.html'
                        }
                    ]
                }
            },
            {
                title: 'Your Leadership Persona',
                description: 'Identify your leadership archetype and learn how to leverage your natural strengths while developing areas for growth.',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop&crop=face',
                url: '../pages/persona-page/index.html'
            },
            {
                title: 'Identifying and Developing Future Leaders',
                description: 'Spot high-potential talent early and create development pathways that nurture tomorrow\'s leaders within your organization.',
                image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop&crop=faces',
                hasSubmenu: true,
                submenu: {
                    id: 'leadership-personas',
                    title: 'Leadership Personas',
                    type: 'two-column',
                    items: [
                        {
                            title: 'Visionary Innovator',
                            description: 'Forward-thinking leaders who create breakthrough solutions and inspire transformational change across the organization.',
                            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=200&fit=crop&crop=face',
                            url: '../pages/leadership-persona/visionary-Innovator.html'
                        },
                        {
                            title: 'Strategic Architect',
                            description: 'Master planners who design comprehensive strategies and build robust frameworks for long-term success.',
                            image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop&crop=faces',
                            url: '../pages/leadership-persona/strategic-architect.html'
                        },
                        {
                            title: 'Analytical Planner',
                            description: 'Data-driven leaders who use systematic analysis and logical frameworks to make informed decisions.',
                            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop',
                            url: '../pages/leadership-persona/analytical-planner.html'
                        },
                        {
                            title: 'Operational Executor',
                            description: 'Hands-on leaders who excel at implementing strategies and ensuring smooth day-to-day operations.',
                            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop&crop=faces',
                            url: '../pages/leadership-persona/operational-executor.html'
                        },
                        {
                            title: 'Results-Driven Executor',
                            description: 'Performance-focused leaders who consistently deliver outcomes and drive teams toward measurable achievements.',
                            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop&crop=faces',
                            url: '../pages/leadership-persona/results-driven-executor.html'
                        },
                        {
                            title: 'Process Innovator',
                            description: 'Creative leaders who reimagine processes and introduce innovative approaches to traditional challenges.',
                            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop&crop=face',
                            url: '../pages/leadership-persona/process-innovator.html'
                        },
                        {
                            title: 'Adaptive Achiever',
                            description: 'Flexible leaders who balance ambitious goals with adaptable strategies to navigate changing environments.',
                            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=face',
                            url: '../pages/leadership-persona/adaptive-achiever.html'
                        },
                        {
                            title: 'Agile Strategist',
                            description: 'Quick-thinking leaders who combine strategic vision with agile execution in fast-paced environments.',
                            image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop&crop=faces',
                            url: '../pages/leadership-persona/agile-strategist.html'
                        },
                        {
                            title: 'Customer Advocate',
                            description: 'Customer-obsessed leaders who champion user needs and drive customer-centric innovation throughout the organization.',
                            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=200&fit=crop&crop=face',
                            url: '../pages/leadership-persona/customer-advocate.html'
                        },
                        {
                            title: 'Growth-Oriented Coach',
                            description: 'Development-focused leaders who prioritize team growth and create cultures of continuous learning and improvement.',
                            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop&crop=faces',
                            url: '../pages/leadership-persona/growth-oriented-coach.html'
                        },
                        {
                            title: 'People-Centric Catalyst',
                            description: 'Relationship-centered leaders who create inclusive environments and drive change through human connections.',
                            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop&crop=face',
                            url: '../pages/leadership-persona/people-centric-catalyst.html'
                        },
                        {
                            title: 'Inspirational Mentor',
                            description: 'Motivational leaders who inspire others through personal example and help team members reach their full potential.',
                            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=face',
                            url: '../pages/leadership-persona/inspirational-mentor.html'
                        },
                        {
                            title: 'Relationship Builder',
                            description: 'Collaborative leaders who excel at forming partnerships and creating strong networks across organizations.',
                            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop&crop=faces',
                            url: '../pages/leadership-persona/relationship-builder.html'
                        },
                        {
                            title: 'Innovative Change-Maker',
                            description: 'Transformational leaders who drive breakthrough innovations and lead organizational change initiatives.',
                            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=200&fit=crop&crop=face',
                            url: '../pages/leadership-persona/innovative-change-maker.html'
                        },
                        {
                            title: 'Innovative Collaborator',
                            description: 'Team-oriented innovators who foster creative collaboration and build cultures of shared innovation.',
                            image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop&crop=faces',
                            url: '../pages/leadership-persona/innovative-collaborator.html'
                        },
                        {
                            title: 'Customer-Centric Visionary',
                            description: 'Future-focused leaders who combine customer insight with visionary thinking to drive market-leading solutions.',
                            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop',
                            url: '../pages/leadership-persona/customer-centric-visionary.html'
                        },
                        {
                            title: 'Decisive Achiever',
                            description: 'Action-oriented leaders who make tough decisions quickly and drive teams toward rapid goal achievement.',
                            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop&crop=faces',
                            url: '../pages/leadership-persona/decisive-achiever.html'
                        },
                        {
                            title: 'Stability Guardian',
                            description: 'Steadfast leaders who maintain organizational stability and ensure consistent performance through proven approaches.',
                            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop&crop=faces',
                            url: '../pages/leadership-persona/stability-guardian.html'
                        },
                        {
                            title: 'Prudent Planner',
                            description: 'Risk-conscious leaders who carefully evaluate options and create well-thought-out plans for sustainable success.',
                            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop&crop=face',
                            url: '../pages/leadership-persona/prudent-planner.html'
                        },
                        {
                            title: 'Structured Strategist',
                            description: 'Systematic leaders who build organized frameworks and create clear roadmaps for strategic implementation.',
                            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=face',
                            url: '../pages/leadership-persona/structured-strategist.html'
                        }
                    ]
                }
            },
            {
                title: 'Take leadership Assessment',
                description: 'Take our comprehensive psychometric assessment to understand your leadership capabilities, blind spots, and development opportunities.',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop',
                url: '../pages/5apr/index.html'
            },
            {
                title: 'Leadership Dimensions',
                description: 'Explore the multi-faceted nature of leadership through cognitive, emotional, social, and behavioral dimensions.',
                image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop&crop=faces',
                url: '../pages/The Science Behind Leadership/The-Science-Behind-Leadership.html'
            }
        ]
    },

    // Organization Menu Configuration
    organization: {
        id: 'organizationDropdown',
        title: 'Organization',
        defaultDescription: 'Uncover what\'s holding your team back—misalignment, unclear roles, or collaboration gaps—and learn how to fix it.',
        defaultImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop&crop=faces',
        items: [
            {
                title: 'Is Your Team Struggling to Deliver Results?',
                description: 'Diagnose performance issues and implement targeted solutions to get your team back on track.',
                image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop&crop=faces',
                url: '../pages/Is-Your-Team-Struggling-to-Deliver-Results/index.html'
            },
            {
                title: 'Improve Collaboration and Reduce Friction',
                description: 'Build stronger team dynamics and eliminate communication barriers that slow down progress.',
                image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop&crop=faces',
                url: '../pages/Improve-Collaboration-and-Reduce-Friction-(Refined for Decision-Makers)/index.html'
            },
            {
                title: 'Team Webpage',
                description: 'Explore team dynamics and collaboration strategies for better organizational performance.',
                image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop&crop=faces',
                url: '../pages/team webpage/inddex.html'
            }
        ]
    },

    // Skills Menu Configuration
    skills: {
        id: 'skillsDropdown',
        title: 'Skills',
        defaultDescription: 'Visualize how roles connect and evolve; unlock hidden internal mobility across your teams.',
        defaultImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop',
        items: [
            {
                title: 'Role Mobility Intelligence',
                description: 'Discover how skills transfer across roles and identify internal mobility opportunities.',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop',
                url: '../pages/Role Mobility Intelligence/index.html'
            },
            {
                title: 'Workforce Intelligence',
                description: 'Gain insights into your workforce capabilities and identify skill gaps and opportunities.',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop',
                url: '../pages/workforce-Intelligence/index.html'
            },
            {
                title: 'Try Skill Extraction Instantly',
                description: 'Experience our skill extraction technology with no sign-up required.',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop',
                url: '../pages/Try-Skill-Extraction-Instantly—No-Sign-Up-Required/index.html'
            },
            {
                title: 'Python Assessment',
                description: 'Test your Python programming skills with our comprehensive assessment.',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop',
                url: '../pages/python/test.html'
            }
        ]
    },

    // Science Menu Configuration
    science: {
        id: 'scienceDropdown',
        title: 'Science',
        defaultDescription: 'Built on decades of psychology and data—see what makes our leadership model predictive and practical.',
        defaultImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop&crop=faces',
        items: [
            {
                title: 'The Science Behind Leadership',
                description: 'Explore the research and methodology behind our leadership assessment framework.',
                image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop&crop=faces',
                url: '../pages/The Science Behind Leadership/The-Science-Behind-Leadership.html'
            },
            {
                title: 'New Era of Leadership',
                description: 'Discover how modern leadership principles are evolving in the digital age.',
                image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop&crop=faces',
                url: '../pages/new-era/index.html'
            }
        ]
    },

    // Resources Menu Configuration
    resources: {
        id: 'resourcesDropdown',
        title: 'Resources',
        defaultDescription: 'Access comprehensive resources, guides, and support materials to maximize the value of our solutions.',
        defaultImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop&crop=faces',
        items: [
            {
                title: 'Platform',
                description: 'Access our comprehensive platform for leadership and organizational development.',
                image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop&crop=faces',
                url: '../plateform/index.html'
            },
            {
                title: 'Assessments',
                description: 'Take various assessments to understand your leadership style and organizational needs.',
                image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop&crop=faces',
                url: '../pages/assessments-pages/index.html'
            },
            {
                title: 'FAQ',
                description: 'Find answers to frequently asked questions about our services and platform.',
                image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop&crop=faces',
                url: '../pages/assessments-pages/faq.html'
            },
            {
                title: 'Contact Us',
                description: 'Get in touch with our team for support and inquiries.',
                image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop&crop=faces',
                url: '../pages/contact-us/index.html'
            }
        ]
    }
}; 