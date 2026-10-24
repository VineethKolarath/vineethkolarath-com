---
title: "Learn the Basics Before the Tools"
date: "24-10-2026"
topic: "Learning"
excerpt: "Tools change every few years. The basics underneath them do not. Here is why the basics matter more than ever, and how to learn them without giving up the tools."
draft: false
image: "/images/posts/learn-the-basics-before-the-tools.png"
imageAlt: "A workbench seen from above: a red LED and a resistor on the left, an open notebook with a hand-drawn circuit and a pencil in the middle, and a small circuit board on the right."
---

Students often ask some version of the same question.

"Which tool should I learn?"

Sometimes it is a programming language. Sometimes it is a new app, a board, a framework or an AI assistant. The question is reasonable. There are so many tools, and everyone seems to be talking about a different one.

But I think there is a better question to ask first.

"Do you understand what the tool is doing for you?"

That is what this essay is about. Not tools against basics. Tools and basics, in the right order.

## Tools change. Basics stay.

Think about the tools a student uses today. Many were not available when today's teachers were students. And many tools students learn today may be replaced before they retire.

That is normal. Tools improve, new approaches emerge, and older tools sometimes become less useful.

But look underneath the tools, and you will find ideas that last much longer.

Electrical circuits still obey the same physical principles. A simple circuit needs a complete path for current to flow. Programs still rely on instructions, conditions and logic. Units still matter when you measure something. And a poorly understood problem is still difficult to solve, no matter how advanced the software may be.

These are the basics. They are not tied to one particular app, programming language or electronic board.

That is what makes them worth learning.

## What goes wrong when we skip them

Let me give you a simple example from electronics.

A student connects a small LED to a board. They find some code online. It works. The LED blinks. They feel they have learned something, and in a way they have.

Then they connect the LED to a different supply without checking the circuit or adding the necessary current limiting. The LED lights briefly and stops working.

That can happen when too much current flows through the LED. The exact outcome depends on the component and the circuit, but the underlying lesson is simple: an LED needs to be operated within its electrical limits.

In a basic circuit, a resistor connected in series with the LED is a common way to limit current. Other circuits use different current-control methods.

This is where a little basic knowledge helps.

Ohm's law describes the relationship between voltage, current and resistance in the conditions where the law applies. It gives you a way to calculate the current or choose a suitable resistor for a simple circuit, provided you also know the LED's forward voltage and the intended current.

You do not have to become an electronics expert before blinking an LED. But understanding that one idea can help you build the circuit more safely and work out why a particular connection might fail.

Without it, you may be able to copy a circuit that works. You may have a harder time knowing whether it is suitable for your own setup.

This is the pattern. When things work, the basics can seem unnecessary. When something goes wrong, they give you a way to investigate instead of guessing.

## Learn one layer below your tool

I am not asking you to give up tools. That would be foolish. Good tools save time, reduce effort and let you build things that would be difficult to do by hand.

Here is a simpler rule: learn one layer below the tool you use.

If you use a spreadsheet, understand the arithmetic it is doing. If a total looks wrong, you should be able to check a few rows by hand.

If you use a code library to read a sensor, understand roughly what the sensor measures and what range of values to expect. Then you will have a better chance of noticing when a reading makes no sense.

If you use an AI assistant to write code, learn enough of the language to read and test what it produces. You may not catch every error, but you will be better placed to ask useful questions and check whether the code does what you intended.

You do not need to understand everything all the way down. Nobody does. Even experienced engineers rely on tools and on other people's knowledge.

But learning one layer below gives you something precious. It helps you check the tool instead of having to trust it blindly.

## The basics I would start with

Every field has its own basics. But some are useful almost everywhere. If I had to choose a few for a student interested in building things, I would start with these.

### 1. Units and rough estimates

Real-world measurements need units. Volts, metres, litres, rupees, minutes. A number without its unit can leave an important part of the answer unclear.

Along with units comes estimation. Before you calculate something exactly, make a rough guess about what the answer should be. Is it closer to ten or to ten thousand?

This habit can catch mistakes early. If a calculation says a small water pump needs more power than a much larger appliance, pause and check the assumptions, units and arithmetic. There may be a good explanation, but the surprising result deserves a second look.

You do not need perfect mental arithmetic. You need to notice when an answer does not make sense.

### 2. Cause and effect in simple systems

Learn how a few simple systems behave. A circuit with a battery, a switch and a bulb. A tank that fills from one pipe and empties through another. A shop where stock comes in and goes out.

These look different, but they share useful ideas. Something flows. Something builds up. Something limits the flow. A change in one part affects another.

Once you start noticing these patterns, you may recognise them in systems you have never studied before.

### 3. Logic

A great deal of technology relies on a few simple ideas: if, then, and, or, not.

"If the soil is dry and the tank has water, then run the pump."

That is a simple rule. It can be translated into a program, provided you have a way to measure soil moisture and check the water level.

The difficult part is often deciding exactly what the rule should mean. How dry is dry? What if the sensor gives an unreliable reading? What if the pump is already running?

Writing the rule clearly helps you discover these questions before they become problems.

A tool can help you implement a rule. It cannot reliably make every important decision about what you want the system to do unless you give it the right requirements and check its work.

### 4. Reading the documentation

Many components, libraries and tools have documentation. For electronic parts, you will often find a datasheet: a document describing the component's characteristics, operating conditions and limits.

Beginners sometimes skip these and search for a video instead. Videos can be useful, especially when you are learning how to connect something for the first time.

But when you need to check a component's maximum ratings, pin connections or recommended operating conditions, the manufacturer's datasheet is an important place to look.

You may not understand every line on your first attempt. That is fine. Start with the parts relevant to what you are trying to do.

Reading documentation can feel slow at first. With practice, you learn what to look for and which details matter.

That skill will help you when you move from one tool to another.

### 5. Changing one thing at a time

When something does not work, the natural reaction is to change several things at once and hope. Sometimes you get lucky. But when it starts working, you may not know which change fixed it.

Try a more deliberate approach.

Change one thing. Test it. Note what happened. Then decide what to try next.

This is a useful troubleshooting habit. It can help with a circuit, a program, a recipe or a process in a shop.

Real systems can be complicated, and some problems require testing several factors together. But when you are starting out, changing one thing at a time often makes it easier to understand what is happening.

### 6. Explaining in plain words

The last basic is not technical at all. It is the ability to explain what you are doing in plain words to someone who is not an expert.

If you struggle to explain your project simply, you may have found a part you do not fully understand yet.

Try explaining it to a friend. Tell them what the project does, what information it needs and how it decides what to do next.

You may discover a gap in your understanding while you are trying to explain it. That is useful. Now you know what to learn next.

And in real work, explaining clearly helps other people understand an idea, question your assumptions and decide whether the solution is suitable for them.

## What about AI tools?

Many students ask about these tools now, so let me answer directly.

AI assistants can write code, summarise documents, suggest designs and answer questions. They can be useful, and students will use them. That is fine.

But an AI assistant does not remove the need for basic knowledge. In some situations, it makes checking the result even more important.

An assistant can produce code that looks correct but contains a mistake. It can misunderstand what you asked for or overlook a condition that matters. Research has found examples of generated code that misuses software libraries or fails to meet the intended requirements.

In my essay [What Is a Thinking Machine?](/writing/what-is-a-thinking-machine), I wrote about how a learning system can produce a wrong answer with confidence. The practical lesson here is not to avoid AI. It is to avoid treating a fluent answer as proof that something is correct.

Knowing the basics can help you check assumptions, test the output and recognise some mistakes. It will not make you immune to every error, so use tests, documentation and other reliable checks as well.

Use the tools. Let them help you. But stay involved in checking the work.

## How to learn the basics without losing interest

Basics have a reputation for being boring. Long chapters, formulas, no visible results for weeks. Sometimes that reputation is deserved, and it can make learning harder than it needs to be.

Here are a few ways to make it work.

**Learn the basics through a project.** You do not have to master an entire subject before you start building. Begin with something small, and learn the relevant principle when you need it. If an LED does not work, investigate the circuit and learn what you need to understand the problem. Just make sure you learn enough to work safely before trying unfamiliar electrical connections.

**Do it by hand once.** Before you let a spreadsheet add a column, add a few rows yourself. Before relying on a library to read a sensor, find out what the sensor measures and look at its documentation. You do not need to do everything by hand forever. The point is to understand what the tool is saving you from doing.

**Ask "why" twice.** When something works, ask why. When you have an answer, ask why again. You may discover that the first answer describes what happened, while the next gets closer to the principle behind it.

**Explain it to someone.** A younger sibling, a parent, a friend. If they understand, that is a good sign. If they look confused, do not blame them or yourself. Find a simpler way to explain it, and see what that teaches you.

**Write things down.** In my essay [Automate a Process, Not a Job](/writing/automate-a-process-not-a-job), I asked you to write a process down before building anything. The same habit helps with learning. A short note about what you tried, what happened and what you learned can become your own reference over time.

## A word to parents and teachers

If you are a parent or a teacher, you may feel pressure to keep up with every new tool. Courses advertise the latest framework. Friends talk about the newest app. It can feel as though a young person will fall behind unless they learn the right tool immediately.

Tools are worth learning. Practical experience matters, too. But it is worth asking what a student is learning through the tool.

Are they only following steps that someone else has written? Or are they beginning to understand why those steps work, how to check the result and what to do when something changes?

A student with a good grasp of the underlying ideas may find it easier to adapt to a new tool. That does not happen automatically, and practice still matters. But the basics give them something to build on.

When you are choosing what a young person should learn, ask: what will this teach them that they can carry into the next tool?

## Where to begin

Here is a small exercise.

Pick one tool you use often. A calculator app, a spreadsheet, a code library, a map app or an AI assistant.

Write down, in one line, what it does for you.

Then write down one thing it does that you cannot yet explain.

Just one.

Spend an hour this week learning about that one thing. Read the relevant documentation or a reliable explanation. Try a small example yourself. Ask someone who knows, if you can.

You do not need to understand the whole tool by the end of that hour. You only need to understand a little more than you did before.

That is one layer below your tool.

In [my first essay](/writing/bring-a-rough-idea), I asked you to bring a rough idea. This time, bring a rough question.

"How does this actually work?" is a very good place to start.

Learn the basics one step at a time. The tools will keep changing. You will be better prepared to learn the next one.