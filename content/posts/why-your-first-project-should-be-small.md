---
title: "Why Your First Project Should Be Small"
date: "29-10-2026"
topic: "Learning"
excerpt: "Big first projects are exciting to announce and hard to finish. A small one that works teaches more. Here is why starting small is not thinking small."
draft: false
image: "/images/posts/why-your-first-project-should-be-small.png"
imageAlt: "A tulasi plant in a clay pot with a soil sensor, wired to a small circuit board and a glowing LED, in front of a faint pencil sketch of a farm and a water tank."
---

Ask a student what they want to build, and the answer is often something big.

A robot that cleans the house. A smart farm that runs itself. An app that solves traffic in the city. A system that predicts exam results.

I like these answers. They show ambition. And ambition is a good thing to bring to engineering. We need people who are willing to imagine things that do not exist yet.

But there is a problem with starting too big. You can spend weeks collecting parts, watching tutorials and writing code, only to discover that nothing works together. The project keeps growing, the problems keep multiplying, and eventually you stop.

You may learn a few things along the way. But you miss something important: the experience of taking an idea all the way from a first attempt to a working result.

So here is my advice. Make your first project small. Smaller than you think it needs to be.

Starting small is not the same as thinking small. Let me explain.

## What happens when the first project is too big

Imagine that your first project is a robot that moves around a room, avoids obstacles, recognises objects and cleans the floor.

That sounds exciting. But look at everything you need to learn before it can work.

You need to understand motors, power supplies, sensors, wiring, programming and mechanical design. You may need to build a frame, connect several components, manage the battery and write code that makes everything work together.

Each part introduces its own problems.

A sensor gives unexpected readings. A motor draws more current than you anticipated. The code works when tested on its own but fails when connected to the rest of the system. A loose wire makes an earlier success disappear.

Now imagine trying to find the cause when several of these things go wrong at once.

Is the sensor faulty? Is the power supply inadequate? Is the code wrong? Did something change when you connected the components?

For someone who is still learning the basics, these problems can be difficult to separate.

The project starts to feel impossible. It goes into a drawer, and the student is left wondering whether engineering is really for them.

But a failed first attempt does not prove that someone lacks talent. Sometimes the project simply asks them to solve too many unfamiliar problems at the same time.

That is something we can change.

## A useful idea from systems thinking

John Gall explored how systems work and fail in his 1975 book, *Systemantics*. One of his best-known observations is now commonly called Gall's law:

> A complex system that works is invariably found to have evolved from a simple system that worked.

Gall also made a much stronger claim: that a complex system designed from scratch never works and cannot be made to work without starting again from a working simple system.

That second claim is deliberately sweeping. It should not be treated as a universal law of engineering. Some complex systems are designed using established methods, existing components and extensive prior knowledge.

But the practical lesson is useful for beginners: **get a simple version working before adding complexity.**

You do not need to prove that every large project must begin this way. You only need to recognise that a working starting point gives you something to build on.

Your first project can be that starting point.

## What does a small project look like?

Small does not mean meaningless. It means that the project has clear boundaries.

For a beginner, a useful first project usually has:

- **One main input.** A sensor reading, a button press or a piece of information.
- **One main action.** Turn on a light, make a sound or display a message.
- **One clear purpose.** Answer a question or solve a small problem.
- **A visible finish line.** You can test it and decide whether it works.

Consider a smaller version of the tulasi-watering machine I described in [What Is a Thinking Machine?](/writing/what-is-a-thinking-machine). Leave out the pump for now.

A sensor measures the soil's moisture. When the reading crosses a threshold you have chosen, a small LED lights up.

That is the whole project.

It does not water the plant. It does not connect to the internet. It does not predict when the plant will need water next week.

It measures something and responds in a way you can observe.

You still have real work to do. You need to connect the components correctly, understand the sensor's readings, choose a sensible threshold and test what happens when the soil becomes wetter or drier. You must also use an appropriate current-limiting resistor for the LED and a suitable power supply.

But the number of things you need to understand is manageable.

And when it works, you have a complete project—not just an idea or a collection of parts.

## What a small, finished project teaches you

A working project takes you through the entire process. You start with an idea, choose the parts, build something, encounter problems, fix them, test the result and decide whether it meets your goal.

That experience matters.

### You learn how to find a fault

Suppose the LED does not light when the soil is dry.

In a small project, you have a limited number of things to check. Is the sensor powered? Is the reading changing? Is the threshold set correctly? Is the LED connected properly?

You can test one possibility at a time.

This is how troubleshooting becomes a skill. You learn to look for evidence rather than change several things and hope the problem disappears.

In a larger project, the same habit is useful—but the number of possible causes can be much greater.

### You begin to understand the basics

A small project gives you a reason to ask simple questions.

Why does the LED need a resistor? What does the sensor's reading actually represent? Why does the value fluctuate? What happens when the wire comes loose?

These are not distractions from the project. They are part of learning to build it properly.

As I explained in [Learn the Basics Before the Tools](/writing/learn-the-basics-before-the-tools), the fundamentals you understand now will help you make sense of more complicated tools and systems later.

You do not need to understand everything before you begin. But you should try to understand the parts you are using and the behaviour you can observe.

### You meet real conditions early

A project that works on your desk may behave differently somewhere else.

The soil may be wetter than you expected. The light may change during the day. A connection may become loose when the pot is moved. The sensor may give readings that are less consistent than the ones you saw in a demonstration.

These are not reasons to avoid building things. They are reasons to test them in the conditions where they will be used.

Even a small project can teach you the difference between making something work once and making it work reliably enough for its intended purpose.

### You practise finishing

There is a difference between starting a project and completing one.

Starting is exciting. You imagine what the finished thing might do. You order the components and begin building.

Finishing involves less glamorous work. You test the system again. You fix the last fault. You check what happens when conditions change. You write down what it can and cannot do.

That final stage is easy to skip, especially when you already have an idea for your next project.

Try not to skip it.

A finished project gives you something concrete to examine. You can explain what you built, show how it behaves and identify what you would improve. The next project can begin with those lessons.

Over time, that experience can make larger projects easier to plan and troubleshoot.

## Small projects can grow into bigger ones

Here is something worth remembering: a small project does not have to remain small forever.

Start with a plant monitor that lights an LED when the soil is dry.

Once that works, you could add a display showing the sensor reading. Later, you might record readings over time. You could then explore whether the system can help you decide when to water the plant.

Each addition introduces a new question to investigate.

If you eventually want an automatic watering system, you can add a pump and the circuitry needed to control it safely. You will also need to think about water supply, power, leaks and what happens if the sensor gives a bad reading.

You would not be starting from nothing. You would already have a working way to measure soil moisture, along with some understanding of its limitations.

That is a much better place to begin.

Eventually, the recorded data might become part of a larger learning project, like the one I described in [How a Machine Learns from Examples](/writing/how-a-machine-learns-from-examples).

Notice the sequence. You are not trying to build the final system in one leap. You are adding capabilities when you have a reason to add them and a way to test them.

The slow path can save time because you discover problems before they become tangled with everything else.

## Why do so many students feel the need to build something big?

Part of the answer is ambition. That is understandable.

But there can be pressure to make a project look impressive, too. A grand idea sounds exciting when you announce it. A demonstration with many components may attract more attention than a simple device. Some competitions and project reviews may encourage students to think about presentation and scope as well as whether the result actually works.

The problem begins when appearance becomes more important than learning.

A large project is not automatically a better project. Nor is a small one automatically good.

What matters is what you set out to do, what you actually built and how well you understand the result.

If a student shows me a simple project, I want to know a few things.

Does it do what they intended? How did they test it? What went wrong during the build? How did they identify the cause? What are its limitations? What would they improve next?

A student who can answer those questions has something valuable to take into the next project: experience, not just an idea.

The number of components cannot tell me that on its own.

## A word to parents and mentors

If you guide a young person, pay attention to what you praise.

It is easy to get excited when a student announces, "I am going to build a robot." It may seem less exciting when they say, "I made an LED light up when the soil is dry."

But one is a plan, and the other is a result.

Show genuine interest in the result. Ask how the student made it work. Ask what was difficult. Let them explain what they would do differently next time.

You do not have to pretend that a small project is extraordinary. You simply have to recognise the effort and understanding that went into completing it.

And when a young person has a big idea, do not dismiss it by telling them to be realistic. Help them find a first step they can actually take.

The aim is not to reduce their ambition. It is to give that ambition a place to begin.

## Keep the big dream

If you want to build a smart farm, keep that idea.

Then ask: what is the smallest part of this idea that could work on its own?

Perhaps it is a sensor that measures moisture in one patch of soil.

If you want to build a cleaning robot, perhaps your first project is a small wheeled base that moves forward and stops when a sensor detects an obstacle.

If you want to build an app that helps people understand city traffic, perhaps you could begin by recording how long your own bus journey takes each day and organising those observations in a simple table.

These are not complete versions of the big ideas. They are small experiments that let you learn something useful.

Each one has a clear purpose. Each one can be tested. And each one can reveal what you need to understand before moving on.

The big dream tells you where you want to go. The first project gives you a way to begin.

## Try this

Take a sheet of paper.

At the top, write your big idea in one sentence. Do not make it smaller yet. Write down what you genuinely want to build.

Below it, answer three questions:

1. What is the one thing my first version needs to notice or receive?
2. What is the one thing it needs to do?
3. How will I test whether it works?

Now imagine building that version without adding anything else.

Could you finish it in two weekends, allowing time to learn, test and fix mistakes? That is a planning guide, not a deadline you must meet. If the project needs skills or parts you do not yet have, make the first version smaller still.

You might end up with something that looks modest. That is fine.

Write down what you will count as success. Build it. Test it. Record what happened, including what did not work.

Then decide what to improve next.

In [Bring a Rough Idea](/writing/bring-a-rough-idea), I asked you to bring a rough idea. This time, bring two things: the big idea you want to pursue, and the small version you will try to finish first.

You do not have to build the whole dream today.

You only have to make the first step real.