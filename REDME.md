1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Method                   Characteristics
getElementById           শুধুমাত্র নির্দিষ্ট ID দিয়ে খোঁজে। এটি সবচেয়ে দ্রুত কাজ করে।
getElementsByClassName   নির্দিষ্ট Class নাম আছে এমন সব এলিমেন্টকে খুঁজে বের করে।
querySelector            CSS Selector (যেমন: .class, #id) ব্যবহার করে প্রথম এলিমেন্টটি ধরে।
querySelectorAll         CSS Selector অনুযায়ী সব এলিমেন্টকে খুঁজে বের করে।

2. How do you create and insert a new element into the DOM?
নতুন এলিমেন্ট তৈরি করতে createElement ব্যবহার করা হয় এবং তা পেজে যুক্ত করতে appendChild বা prepend ব্যবহার করা হয়।
ধাপগুলো:
এলিমেন্ট তৈরি করা: let newDiv = document.createElement('div');
কন্টেন্ট যোগ করা: newDiv.innerText = "হ্যালো বাংলাদেশ!";
পেজে যুক্ত করা: document.body.appendChild(newDiv);


3. What is Event Bubbling? And how does it work?
Event Bubbling হলো এমন একটি প্রক্রিয়া যেখানে কোনো এলিমেন্টে ইভেন্ট (যেমন: ক্লিক) ঘটলে, সেই ইভেন্টটি তার প্যারেন্ট এলিমেন্টগুলোর দিকে ওপরের দিকে উঠতে থাকে।
কীভাবে কাজ করে: ধরুন একটি <div> এর ভেতরে একটি <button> আছে। আপনি যদি বাটনে ক্লিক করেন, তবে ব্রাউজার প্রথমে বাটনের ক্লিক ইভেন্টটি চালাবে, তারপর তার প্যারেন্ট <div> এর ক্লিক ইভেন্ট, এবং সবশেষে window পর্যন্ত এটি পৌঁছাবে। এটি অনেকটা পানির নিচ থেকে বুদবুদ (Bubble) ওপরে ওঠার মতো।


4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation হলো ইভেন্ট বাবলিংয়ের সুবিধা নিয়ে অনেকগুলো চাইল্ড এলিমেন্টে আলাদাভাবে ইভেন্ট লিসেনার না বসিয়ে, তাদের কমন প্যারেন্ট এলিমেন্টে একটিমাত্র ইভেন্ট লিসেনার বসানো।
কেন এটি দরকার?
1. মেমোরি সাশ্রয়: যদি আপনার ১০০০টি লিস্ট আইটেম থাকে, তবে ১০০০টি আলাদা লিসেনার না বসিয়ে শুধু একটি প্যারেন্ট <ul> এ লিসেনার বসালে পারফরম্যান্স ভালো হয়।
2.ডাইনামিক এলিমেন্ট: নতুন কোনো আইটেম পরে যোগ করলেও সেটি স্বয়ংক্রিয়ভাবে ইভেন্টটি পেয়ে যায়।


5. What is the difference between preventDefault() and stopPropagation() methods?
এই দুটি মেথড ইভেন্টের আচরণ নিয়ন্ত্রণ করে, কিন্তু এদের কাজ ভিন্ন:
1.preventDefault(): এটি ব্রাউজারের ডিফল্ট আচরণ বন্ধ করে।
Example: একটি লিংকে (<a>) ক্লিক করলে পেজ রিলোড হয় বা অন্য পেজে যায়। এটি কল করলে পেজ কোথাও যাবে না।
2.stopPropagation(): এটি ইভেন্ট বাবলিং (Event Bubbling) বন্ধ করে।
Example: আপনি যদি চান বাটনে ক্লিক করলে শুধু বাটনের ফাংশনটিই চলবে, তার প্যারেন্ট এলিমেন্টের কোনো ফাংশন চলবে না, তখন এটি ব্যবহার করা হয়।
