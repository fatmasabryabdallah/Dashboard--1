// ============================================================
// CodeLevel – Internet & How the Web Works – Question Bank
// 6 Levels · 35 Questions · MCQ & True/False
// ============================================================

const INTERNET_QUESTIONS = [

  // ──────────────────────────────────────────────
  // LEVEL 1 – How the Internet Works
  // ──────────────────────────────────────────────
  {
    id: "internet_1_1",
    type: "mcq",
    difficulty: "beginner",
    level: 1,
    question: "What is the Internet?",
    options: [
      "A single computer that stores all websites",
      "A global network of interconnected computers that communicate using standardized protocols",
      "A software application used to browse websites",
      "A programming language used to build websites"
    ],
    correctAnswer: 1,
    explanation: "The Internet is a vast, global network of billions of interconnected computers and devices that communicate with each other using standardized protocols like TCP/IP. It is not a single entity — it is a decentralized 'network of networks' that spans the entire globe.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work", title: "How does the Internet work? – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/whatis/whatis_internet.asp", title: "What is the Internet? – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "internet_1_2",
    type: "mcq",
    difficulty: "beginner",
    level: 1,
    question: "Which protocol is considered the foundation of data communication on the Internet?",
    options: [
      "FTP",
      "SMTP",
      "TCP/IP",
      "SSH"
    ],
    correctAnswer: 2,
    explanation: "TCP/IP (Transmission Control Protocol / Internet Protocol) is the foundational protocol suite that powers all Internet communication. TCP handles breaking data into packets and reassembling them, while IP handles addressing and routing those packets to the correct destination.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work", title: "How does the Internet work? – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/whatis/whatis_tcp.asp", title: "What is TCP/IP? – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "internet_1_3",
    type: "true_false",
    difficulty: "beginner",
    level: 1,
    question: "The Internet and the World Wide Web (WWW) are the same thing.",
    correctAnswer: false,
    explanation: "This is one of the most common misconceptions! The Internet is the physical infrastructure — a global network of interconnected computers. The World Wide Web (WWW) is a service that runs ON TOP of the Internet, using HTTP to transmit web pages. Other services like email (SMTP) and file transfer (FTP) also run on the Internet but are not part of the Web.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines", title: "Web pages, sites, servers & search engines – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/whatis/whatis_internet.asp", title: "What is the Internet? – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "internet_1_4",
    type: "mcq",
    difficulty: "beginner",
    level: 1,
    question: "What does an ISP stand for and what role does it play?",
    options: [
      "Internet Service Provider — it provides you access to the Internet",
      "Internal System Protocol — it manages your computer's memory",
      "Internet Security Program — it protects websites from hackers",
      "Integrated Software Package — it bundles software tools together"
    ],
    correctAnswer: 0,
    explanation: "An ISP (Internet Service Provider) is a company that provides individuals and organizations access to the Internet. Examples include Comcast, AT&T, and Vodafone. Your device connects to your ISP, which then connects you to the broader Internet backbone.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work", title: "How does the Internet work? – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/whatis/whatis_internet.asp", title: "What is the Internet? – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "internet_1_5",
    type: "mcq",
    difficulty: "beginner",
    level: 1,
    question: "What is a 'packet' in the context of the Internet?",
    options: [
      "A physical envelope containing computer hardware",
      "A small unit of data transmitted over a network",
      "A type of virus that spreads through the Internet",
      "A compression format for images"
    ],
    correctAnswer: 1,
    explanation: "When data is sent over the Internet, it is broken down into small chunks called 'packets.' Each packet contains a portion of the data plus header information (source, destination, sequence number). Packets can travel different routes and are reassembled at the destination. This approach is called 'packet switching' and makes the Internet resilient and efficient.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work", title: "How does the Internet work? – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/cybersecurity/cybersecurity_networking.php", title: "Networking Basics – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "internet_1_6",
    type: "true_false",
    difficulty: "beginner",
    level: 1,
    question: "An IP address uniquely identifies a device on the Internet.",
    correctAnswer: true,
    explanation: "An IP (Internet Protocol) address is a unique numerical label assigned to each device connected to a network that uses the Internet Protocol. IPv4 addresses look like 192.168.1.1, while IPv6 addresses are longer (e.g., 2001:0db8:85a3::8a2e:0370:7334). Every device needs a unique IP to send and receive data correctly.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work", title: "How does the Internet work? – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/whatis/whatis_ip.asp", title: "What is an IP Address? – W3Schools" }
    ],
    xp: 10
  },

  // ──────────────────────────────────────────────
  // LEVEL 2 – HTTP & HTTPS
  // ──────────────────────────────────────────────
  {
    id: "internet_2_1",
    type: "mcq",
    difficulty: "beginner",
    level: 2,
    question: "What does HTTP stand for?",
    options: [
      "HyperText Transfer Protocol",
      "High-Tech Transmission Process",
      "HyperText Transformation Protocol",
      "Hyperlink Transfer Procedure"
    ],
    correctAnswer: 0,
    explanation: "HTTP stands for HyperText Transfer Protocol. It is the protocol used for transmitting web pages and other resources between a client (usually a web browser) and a web server. It defines how messages are formatted and transmitted, and what actions servers and browsers should take in response to various commands.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview", title: "An overview of HTTP – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/whatis/whatis_http.asp", title: "What is HTTP? – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "internet_2_2",
    type: "mcq",
    difficulty: "beginner",
    level: 2,
    question: "What is the main difference between HTTP and HTTPS?",
    options: [
      "HTTPS is faster than HTTP",
      "HTTPS uses encryption (SSL/TLS) to secure data in transit",
      "HTTP is only for images while HTTPS is for text",
      "HTTPS requires a more powerful server"
    ],
    correctAnswer: 1,
    explanation: "The 'S' in HTTPS stands for 'Secure.' HTTPS uses SSL/TLS encryption to protect data transmitted between the browser and the server. This means third parties cannot easily intercept or read the data being exchanged, which is critical for sensitive information like passwords, credit card numbers, and personal data.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Glossary/HTTPS", title: "HTTPS – MDN Glossary" },
      { type: "w3schools", url: "https://www.w3schools.com/whatis/whatis_https.asp", title: "What is HTTPS? – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "internet_2_3",
    type: "mcq",
    difficulty: "intermediate",
    level: 2,
    question: "Which HTTP status code indicates that a resource has been permanently moved to a new URL?",
    options: [
      "200 OK",
      "301 Moved Permanently",
      "404 Not Found",
      "500 Internal Server Error"
    ],
    correctAnswer: 1,
    explanation: "HTTP 301 means 'Moved Permanently.' It tells the client (and search engines) that the requested resource has been permanently relocated to a new URL, provided in the Location header. This is different from 302 (temporary redirect). A 200 means success, 404 means not found, and 500 means a server-side error.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301", title: "301 Moved Permanently – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/tags/ref_httpmessages.asp", title: "HTTP Status Messages – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "internet_2_4",
    type: "true_false",
    difficulty: "beginner",
    level: 2,
    question: "HTTP is a stateless protocol, meaning the server does not remember previous requests from the same client.",
    correctAnswer: true,
    explanation: "HTTP is indeed stateless — each request-response cycle is independent and the server does not inherently retain information about previous requests. This is why technologies like cookies, sessions, and tokens (JWT) were invented to maintain state across multiple HTTP requests (e.g., keeping a user logged in).",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview", title: "An overview of HTTP – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/whatis/whatis_http.asp", title: "What is HTTP? – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "internet_2_5",
    type: "mcq",
    difficulty: "intermediate",
    level: 2,
    question: "Which HTTP method is used to send data to a server to create or update a resource?",
    options: [
      "GET",
      "POST",
      "DELETE",
      "HEAD"
    ],
    correctAnswer: 1,
    explanation: "The POST method is used to submit data to a server, typically to create a new resource or trigger a process. GET is used to retrieve data (and should never modify server state). DELETE removes a resource. HEAD is like GET but only retrieves headers without the body. PUT can also be used to update/create, but POST is the most common answer for creating resources.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods", title: "HTTP request methods – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/tags/ref_httpmethods.asp", title: "HTTP Request Methods – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "internet_2_6",
    type: "true_false",
    difficulty: "intermediate",
    level: 2,
    question: "An SSL/TLS certificate is required for a website to use HTTPS.",
    correctAnswer: true,
    explanation: "To enable HTTPS on a website, you must install an SSL/TLS certificate on the web server. This certificate serves two purposes: (1) it provides the public key needed for encryption, and (2) it verifies the identity of the website, proving that the site is who it claims to be. Services like Let's Encrypt provide free SSL/TLS certificates.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Glossary/TLS", title: "TLS – MDN Glossary" },
      { type: "w3schools", url: "https://www.w3schools.com/whatis/whatis_https.asp", title: "What is HTTPS? – W3Schools" }
    ],
    xp: 20
  },

  // ──────────────────────────────────────────────
  // LEVEL 3 – Domain Names
  // ──────────────────────────────────────────────
  {
    id: "internet_3_1",
    type: "mcq",
    difficulty: "beginner",
    level: 3,
    question: "What is a domain name?",
    options: [
      "The physical address of a web server",
      "A human-readable address used to access websites (e.g., google.com)",
      "The username required to log into a website",
      "A programming language for building websites"
    ],
    correctAnswer: 1,
    explanation: "A domain name is a human-readable, memorable address that maps to a website's numeric IP address. Instead of remembering 142.250.190.46, you can simply type 'google.com.' Domain names are managed through a hierarchical system and must be registered through accredited domain registrars.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name", title: "What is a domain name? – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/whatis/whatis_domain.asp", title: "What is a Domain Name? – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "internet_3_2",
    type: "mcq",
    difficulty: "beginner",
    level: 3,
    question: "In the domain 'www.example.com', what is '.com' called?",
    options: [
      "Second-level domain",
      "Subdomain",
      "Top-level domain (TLD)",
      "Root domain"
    ],
    correctAnswer: 2,
    explanation: "'.com' is a Top-Level Domain (TLD). TLDs are the highest level in the domain name hierarchy. Common TLDs include .com (commercial), .org (organizations), .net (network), .edu (education), and country-code TLDs like .uk, .de, .jp. In 'www.example.com', 'example' is the second-level domain, and 'www' is a subdomain.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name", title: "What is a domain name? – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/whatis/whatis_domain.asp", title: "What is a Domain Name? – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "internet_3_3",
    type: "true_false",
    difficulty: "beginner",
    level: 3,
    question: "Once you buy a domain name, you own it forever.",
    correctAnswer: false,
    explanation: "You do NOT own a domain name forever — you lease (register) it for a specific period, typically 1 to 10 years. You must renew the registration before it expires, or you will lose the domain and it can be registered by someone else. This is why domain registrars send renewal reminders. ICANN is the organization that oversees the domain name system globally.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name", title: "What is a domain name? – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/whatis/whatis_domain.asp", title: "What is a Domain Name? – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "internet_3_4",
    type: "mcq",
    difficulty: "intermediate",
    level: 3,
    question: "In 'blog.example.com', what is 'blog'?",
    options: [
      "A top-level domain",
      "A subdomain",
      "A file path",
      "A protocol"
    ],
    correctAnswer: 1,
    explanation: "In 'blog.example.com', 'blog' is a subdomain. Subdomains are prefixes added to a domain name to organize different sections of a website. Common subdomains include 'www', 'mail', 'blog', 'shop', and 'api'. Each subdomain can point to a different server or section entirely. You can create subdomains without purchasing new domain names.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name", title: "What is a domain name? – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/whatis/whatis_domain.asp", title: "What is a Domain Name? – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "internet_3_5",
    type: "mcq",
    difficulty: "intermediate",
    level: 3,
    question: "Which organization is responsible for managing the global domain name system?",
    options: [
      "Google",
      "W3C (World Wide Web Consortium)",
      "ICANN (Internet Corporation for Assigned Names and Numbers)",
      "IEEE (Institute of Electrical and Electronics Engineers)"
    ],
    correctAnswer: 2,
    explanation: "ICANN (Internet Corporation for Assigned Names and Numbers) is the non-profit organization that coordinates the global domain name system, including the management of TLDs, accreditation of domain registrars, and allocation of IP address spaces. W3C focuses on web standards, IEEE on electrical/electronic standards, and Google is a private company.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name", title: "What is a domain name? – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/whatis/whatis_domain.asp", title: "What is a Domain Name? – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "internet_3_6",
    type: "true_false",
    difficulty: "beginner",
    level: 3,
    question: "Two different websites can have the exact same domain name.",
    correctAnswer: false,
    explanation: "Every domain name is unique — no two websites can have the exact same domain name. This is enforced by the domain registrar and ICANN. When you register a domain, it is reserved exclusively for you. However, different TLDs can be used (e.g., example.com and example.org are different domain names and can belong to different owners).",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name", title: "What is a domain name? – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/whatis/whatis_domain.asp", title: "What is a Domain Name? – W3Schools" }
    ],
    xp: 10
  },

  // ──────────────────────────────────────────────
  // LEVEL 4 – DNS (Domain Name System)
  // ──────────────────────────────────────────────
  {
    id: "internet_4_1",
    type: "mcq",
    difficulty: "beginner",
    level: 4,
    question: "What is the primary function of DNS?",
    options: [
      "To encrypt data sent between browsers and servers",
      "To translate domain names into IP addresses",
      "To block malicious websites",
      "To compress web pages for faster loading"
    ],
    correctAnswer: 1,
    explanation: "DNS (Domain Name System) acts like the 'phonebook of the Internet.' Its primary function is to translate human-readable domain names (like google.com) into machine-readable IP addresses (like 142.250.190.46) so that browsers can find and connect to the correct web servers.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Glossary/DNS", title: "DNS – MDN Glossary" },
      { type: "w3schools", url: "https://www.w3schools.com/whatis/whatis_dns.asp", title: "What is DNS? – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "internet_4_2",
    type: "mcq",
    difficulty: "intermediate",
    level: 4,
    question: "What is a DNS 'A Record'?",
    options: [
      "A record that points a domain name to an IPv4 address",
      "A record that stores administrator contact information",
      "A record that redirects email to a mail server",
      "A record that authenticates the domain owner"
    ],
    correctAnswer: 0,
    explanation: "An 'A Record' (Address Record) is the most fundamental type of DNS record. It maps a domain name directly to an IPv4 address. For example, an A record for 'example.com' might point to '93.184.216.34'. For IPv6 addresses, the equivalent is called an 'AAAA Record.' MX records handle email routing, and CNAME records create aliases.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Glossary/DNS", title: "DNS – MDN Glossary" },
      { type: "w3schools", url: "https://www.w3schools.com/whatis/whatis_dns.asp", title: "What is DNS? – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "internet_4_3",
    type: "true_false",
    difficulty: "beginner",
    level: 4,
    question: "DNS resolution happens every single time you visit a website, with no caching involved.",
    correctAnswer: false,
    explanation: "DNS results are heavily cached at multiple levels to improve speed and reduce load on DNS servers. Your browser caches DNS lookups, your operating system has a DNS cache, your router may cache results, and your ISP's DNS resolver also caches results. Each DNS record has a TTL (Time To Live) value that specifies how long it can be cached before a fresh lookup is needed.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Glossary/DNS", title: "DNS – MDN Glossary" },
      { type: "w3schools", url: "https://www.w3schools.com/whatis/whatis_dns.asp", title: "What is DNS? – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "internet_4_4",
    type: "mcq",
    difficulty: "intermediate",
    level: 4,
    question: "Which type of DNS record is used to direct email to the correct mail server?",
    options: [
      "A Record",
      "CNAME Record",
      "MX Record",
      "TXT Record"
    ],
    correctAnswer: 2,
    explanation: "MX (Mail Exchange) records specify the mail server responsible for accepting email on behalf of a domain. When someone sends an email to user@example.com, the sending mail server queries the MX record for 'example.com' to find out which mail server to deliver the email to. MX records also have priority values to determine which server is tried first.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Glossary/DNS", title: "DNS – MDN Glossary" },
      { type: "w3schools", url: "https://www.w3schools.com/whatis/whatis_dns.asp", title: "What is DNS? – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "internet_4_5",
    type: "mcq",
    difficulty: "intermediate",
    level: 4,
    question: "What is the correct order of DNS resolution when you type a URL into your browser?",
    options: [
      "Root server → TLD server → Authoritative server → IP returned",
      "ISP server → Root server → IP returned directly",
      "Browser goes directly to the website's server",
      "TLD server → Root server → Authoritative server → IP returned"
    ],
    correctAnswer: 0,
    explanation: "When a DNS query cannot be resolved from cache, the recursive resolver queries in this order: (1) Root name server — which directs to the correct TLD server, (2) TLD name server (e.g., .com) — which directs to the authoritative server, (3) Authoritative name server — which holds the actual DNS records and returns the final IP address. This hierarchical approach is what makes DNS scalable.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Glossary/DNS", title: "DNS – MDN Glossary" },
      { type: "w3schools", url: "https://www.w3schools.com/whatis/whatis_dns.asp", title: "What is DNS? – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "internet_4_6",
    type: "true_false",
    difficulty: "intermediate",
    level: 4,
    question: "A CNAME record allows you to create an alias that points one domain name to another domain name.",
    correctAnswer: true,
    explanation: "A CNAME (Canonical Name) record creates an alias from one domain name to another. For example, you could set up a CNAME so that 'www.example.com' points to 'example.com', or 'shop.example.com' points to 'mystore.shopify.com'. The browser then resolves the target domain's A record to get the final IP address. Important: CNAME records cannot be placed on the zone apex (root domain).",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Glossary/DNS", title: "DNS – MDN Glossary" },
      { type: "w3schools", url: "https://www.w3schools.com/whatis/whatis_dns.asp", title: "What is DNS? – W3Schools" }
    ],
    xp: 20
  },

  // ──────────────────────────────────────────────
  // LEVEL 5 – Web Hosting
  // ──────────────────────────────────────────────
  {
    id: "internet_5_1",
    type: "mcq",
    difficulty: "beginner",
    level: 5,
    question: "What is web hosting?",
    options: [
      "A type of programming language",
      "A service that stores your website's files and makes them accessible on the Internet",
      "A browser extension for faster browsing",
      "A security tool that encrypts your website"
    ],
    correctAnswer: 1,
    explanation: "Web hosting is a service that provides the server space, technology, and connectivity needed to store your website's files (HTML, CSS, JavaScript, images, databases) and make them accessible to users on the Internet 24/7. Without hosting, your website files would only exist on your local computer and nobody else could access them.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server", title: "What is a web server? – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/whatis/whatis_hosting.asp", title: "What is Web Hosting? – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "internet_5_2",
    type: "mcq",
    difficulty: "intermediate",
    level: 5,
    question: "Which type of hosting gives you an entire physical server dedicated exclusively to your website?",
    options: [
      "Shared Hosting",
      "VPS (Virtual Private Server)",
      "Dedicated Server Hosting",
      "Cloud Hosting"
    ],
    correctAnswer: 2,
    explanation: "Dedicated Server Hosting provides an entire physical server exclusively for your website. This offers maximum performance, control, and security but is the most expensive option. Shared hosting puts multiple websites on one server. VPS uses virtualization to simulate a dedicated environment on shared hardware. Cloud hosting distributes resources across multiple virtual servers.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server", title: "What is a web server? – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/whatis/whatis_hosting.asp", title: "What is Web Hosting? – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "internet_5_3",
    type: "true_false",
    difficulty: "beginner",
    level: 5,
    question: "Shared hosting means your website shares server resources (CPU, RAM, storage) with other websites.",
    correctAnswer: true,
    explanation: "In shared hosting, multiple websites are hosted on the same physical server and share its resources (CPU, RAM, disk space, bandwidth). This makes it the cheapest hosting option, but it also means that if one website on the server experiences a traffic spike or uses excessive resources, it can affect the performance of other sites on the same server.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server", title: "What is a web server? – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/whatis/whatis_hosting.asp", title: "What is Web Hosting? – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "internet_5_4",
    type: "mcq",
    difficulty: "intermediate",
    level: 5,
    question: "What is a key advantage of cloud hosting over traditional hosting?",
    options: [
      "It is always free",
      "It can scale resources up or down based on demand",
      "It doesn't require an Internet connection",
      "It only works with static websites"
    ],
    correctAnswer: 1,
    explanation: "The main advantage of cloud hosting is scalability — resources (CPU, RAM, storage) can be dynamically scaled up or down based on real-time demand. If your site suddenly gets a huge traffic spike, cloud hosting can automatically allocate more resources to handle it. You typically pay only for what you use. Major providers include AWS, Google Cloud, and Microsoft Azure.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server", title: "What is a web server? – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/whatis/whatis_hosting.asp", title: "What is Web Hosting? – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "internet_5_5",
    type: "mcq",
    difficulty: "beginner",
    level: 5,
    question: "What type of website can be hosted for free on platforms like GitHub Pages or Netlify?",
    options: [
      "Only e-commerce websites",
      "Static websites (HTML, CSS, JavaScript with no server-side processing)",
      "Only websites with databases",
      "Websites that require PHP"
    ],
    correctAnswer: 1,
    explanation: "Platforms like GitHub Pages, Netlify, and Vercel offer free hosting for static websites — sites built with HTML, CSS, and client-side JavaScript that don't require server-side processing (no PHP, Python, databases, etc.). These platforms serve pre-built files directly from a CDN, making them fast and reliable for portfolios, documentation, blogs, and landing pages.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/Using_GitHub_pages", title: "Using GitHub Pages – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/whatis/whatis_hosting.asp", title: "What is Web Hosting? – W3Schools" }
    ],
    xp: 10
  },

  // ──────────────────────────────────────────────
  // LEVEL 6 – How Browsers Work
  // ──────────────────────────────────────────────
  {
    id: "internet_6_1",
    type: "mcq",
    difficulty: "beginner",
    level: 6,
    question: "What is the primary function of a web browser?",
    options: [
      "To create websites",
      "To retrieve, render, and display web content from the Internet",
      "To store data on a web server",
      "To protect your computer from viruses"
    ],
    correctAnswer: 1,
    explanation: "A web browser (like Chrome, Firefox, Safari, Edge) is a software application whose primary job is to: (1) retrieve resources from web servers using HTTP/HTTPS, (2) parse and process HTML, CSS, and JavaScript, and (3) render and display the visual output to the user. It acts as the bridge between the user and the World Wide Web.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work", title: "How browsers work – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/whatis/whatis_browser.asp", title: "What is a Browser? – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "internet_6_2",
    type: "mcq",
    difficulty: "intermediate",
    level: 6,
    question: "What is the 'DOM' that a browser creates when it parses an HTML document?",
    options: [
      "A compressed version of the HTML file for faster loading",
      "A tree-like data structure representing the HTML document's elements and their relationships",
      "A security certificate for the website",
      "A backup copy of the website stored in the browser"
    ],
    correctAnswer: 1,
    explanation: "The DOM (Document Object Model) is a tree-like data structure that the browser constructs by parsing the HTML document. Each HTML element becomes a 'node' in the tree, with parent-child relationships reflecting the nesting of elements. JavaScript can interact with and manipulate this DOM to dynamically change the page's content, structure, and styling without reloading.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction", title: "Introduction to the DOM – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/js/js_htmldom.asp", title: "JavaScript HTML DOM – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "internet_6_3",
    type: "mcq",
    difficulty: "intermediate",
    level: 6,
    question: "What is the browser's 'rendering engine' responsible for?",
    options: [
      "Executing JavaScript code",
      "Parsing HTML/CSS and painting the visual output on the screen",
      "Managing network requests",
      "Storing cookies and local data"
    ],
    correctAnswer: 1,
    explanation: "The rendering engine (e.g., Blink in Chrome, Gecko in Firefox, WebKit in Safari) is responsible for parsing HTML and CSS, constructing the DOM and CSSOM trees, computing the layout (where every element goes on the page), and painting the pixels to the screen. JavaScript execution is handled by a separate component — the JavaScript engine (e.g., V8 in Chrome).",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work", title: "How browsers work – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/whatis/whatis_browser.asp", title: "What is a Browser? – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "internet_6_4",
    type: "true_false",
    difficulty: "intermediate",
    level: 6,
    question: "JavaScript execution can block the browser from rendering the page because JS runs on the main thread.",
    correctAnswer: true,
    explanation: "By default, JavaScript runs on the browser's main thread, which is the same thread responsible for rendering. When the browser encounters a <script> tag, it pauses HTML parsing and rendering to download and execute the script. This is called 'render blocking.' To mitigate this, developers use the 'async' or 'defer' attributes on script tags, or place scripts at the end of the <body>.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work", title: "How browsers work – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/tags/att_script_defer.asp", title: "HTML script defer Attribute – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "internet_6_5",
    type: "mcq",
    difficulty: "intermediate",
    level: 6,
    question: "What is the correct order of the browser's critical rendering path?",
    options: [
      "JavaScript → HTML → CSS → Display",
      "HTML → DOM, CSS → CSSOM → Render Tree → Layout → Paint",
      "CSS → HTML → JavaScript → Paint",
      "Download all files → Display everything at once"
    ],
    correctAnswer: 1,
    explanation: "The browser's critical rendering path follows these steps: (1) Parse HTML to build the DOM tree, (2) Parse CSS to build the CSSOM tree, (3) Combine DOM and CSSOM into a Render Tree (only visible elements), (4) Layout — calculate the exact position and size of each element, (5) Paint — fill in pixels. Understanding this path is key to web performance optimization.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path", title: "Critical rendering path – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/whatis/whatis_browser.asp", title: "What is a Browser? – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "internet_6_6",
    type: "true_false",
    difficulty: "beginner",
    level: 6,
    question: "All major browsers use the exact same rendering engine to display web pages.",
    correctAnswer: false,
    explanation: "Different browsers use different rendering engines: Chrome and Edge use Blink, Firefox uses Gecko, and Safari uses WebKit. This is why websites can sometimes look or behave slightly differently across browsers. Developers must test their sites in multiple browsers to ensure cross-browser compatibility. Blink was actually forked from WebKit in 2013.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work", title: "How browsers work – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/whatis/whatis_browser.asp", title: "What is a Browser? – W3Schools" }
    ],
    xp: 10
  }
];

// ──────────────────────────────────────────────────────────
// Level Definitions
// ──────────────────────────────────────────────────────────

const INTERNET_LEVELS = [
  {
    level: 1,
    title: "How the Internet Works",
    description: "Understand the fundamentals: what the Internet is, how data travels as packets, IP addresses, and the role of ISPs.",
    icon: "🌐",
    requiredXP: 0
  },
  {
    level: 2,
    title: "HTTP & HTTPS",
    description: "Learn how browsers and servers communicate using HTTP, the difference HTTPS makes, status codes, and request methods.",
    icon: "🔒",
    requiredXP: 50
  },
  {
    level: 3,
    title: "Domain Names",
    description: "Discover what domain names are, how they are structured with TLDs and subdomains, and how registration works.",
    icon: "📛",
    requiredXP: 100
  },
  {
    level: 4,
    title: "DNS (Domain Name System)",
    description: "Explore the Internet's phonebook: how DNS translates domain names to IP addresses, record types, caching, and the resolution process.",
    icon: "📖",
    requiredXP: 160
  },
  {
    level: 5,
    title: "Web Hosting",
    description: "Understand shared, VPS, dedicated, and cloud hosting — plus how static site hosting platforms work.",
    icon: "🖥️",
    requiredXP: 230
  },
  {
    level: 6,
    title: "How Browsers Work",
    description: "Dive into the browser internals: DOM construction, rendering engines, the critical rendering path, and JavaScript execution.",
    icon: "🧭",
    requiredXP: 300
  }
];
