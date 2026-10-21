---
title: "What Is a Thinking Machine?"
date: "21-10-2026"
topic: "Thinking Machines"
excerpt: "A thinking machine is not a robot with a brain. It is a machine that notices, decides and learns. Here is the idea in plain words."
draft: false
image: "/images/posts/what-is-a-thinking-machine.png"
imageAlt: "Four laterite stone steps rising from left to right: a ceiling-fan blade on the first, a rice cooker on the second, a folded road map on the third, and a tulasi plant with a soil sensor on the top step."
---

Close your eyes for a moment. Picture a thinking machine.

What do you see? Perhaps a robot. A metal head. Glowing eyes. Maybe a deep, slow voice, if you have watched enough films.

That picture makes the idea feel distant. As if thinking machines belong in a film studio or a big laboratory somewhere far away.

But the machines we are talking about are already much closer to home. You may have used several of them today without giving them a second thought.

Once you begin to understand how they work, you may even find yourself building one.

So let us take it slowly, one step at a time.

## Start with an ordinary machine

Look up at the ceiling fan. You turn the regulator to three. The fan spins.

It will keep spinning at that setting, whether the room gets cooler during a monsoon shower or warmer in the afternoon.

The fan does not know how the room feels. A basic fan has no room-temperature sensor telling it when to change its speed. It simply follows your setting.

Some newer fans have timers, remote controls and sleep modes. These are useful additions. But unless a fan has a system that measures room conditions and adjusts its behaviour accordingly, it will not respond to the temperature of the room.

Let us call this our first kind of machine.

**A plain machine follows instructions.**

## Step one: it notices

Now walk into the kitchen. Think of an ordinary electric rice cooker.

You wash the rice. Add water. Close the lid and press the switch down. Then you go and do something else.

A while later, you hear a click. The cooker has switched from cooking to warming.

How did it know?

In many traditional rice cookers, a temperature-sensitive mechanism sits beneath the cooking pot. While water remains in the pot, its temperature stays close to the boiling point under normal cooking conditions.

As the free water in the pot runs out, the temperature at the bottom begins to rise. The cooker detects this change and switches off the main heating element.

Some traditional models use a magnetic thermostat. Other cookers use different sensing and control mechanisms, so the exact arrangement depends on the model.

The important idea is the same. Something in the machine responds to a change in the world.

That is what a sensor does. It detects or measures something, such as temperature, light or moisture, and makes that information available to the machine.

The cooker does not need a human to stand beside it and watch the rice. It can respond automatically when the relevant condition changes.

**An automatic machine reacts to a condition.**

But notice the limitation. The cooker follows a mechanism designed in advance. It does not invent a new cooking rule because the weather has changed or because you are cooking a different variety of rice.

It can react without learning.

## Step two: it decides

Now pick up your phone and open a map app.

Imagine you are driving from Kannur to Kochi along NH 66. Somewhere along the way, traffic slows to a crawl. Perhaps a lorry has broken down. Perhaps roadworks have narrowed a lane.

Your map app shows a delay and suggests another route.

How did it work that out?

Navigation services can use information from devices travelling along roads to estimate traffic conditions. Google Maps, for example, explains that navigation data helps it identify traffic conditions, disruptions and potentially faster routes. Historical traffic patterns can also help it estimate how long a journey may take.

The service compares possible routes using factors such as estimated travel time and current traffic conditions. It then offers an alternative when its calculations suggest that another route may be better.

This is not magic. It is a system working with data, rules and calculations to compare available choices.

There is an important qualification here. The app does not necessarily know why traffic has slowed down. It may detect a delay without knowing whether the cause is an accident, roadwork or something else. Its information can also be incomplete or out of date.

And the route it recommends may not be the one you would choose. You might prefer a familiar road, a safer turn or a place where you can stop for tea.

The app offers a recommendation. You remain free to accept or reject it.

**A decision-making machine compares possibilities and selects an option according to its objectives and constraints.**

Some decisions are made using fixed rules. Others use predictions learned from data. Many real systems combine both.

## Step three: it learns

There is another step, and it brings us closer to what people usually mean when they talk about artificial intelligence.

Think about the spam folder in your email.

Spam is unwanted or suspicious mail. Fake lottery prizes. Strange job offers. Messages warning that your account will be blocked unless you click a link immediately.

Could someone write a separate rule for every possible spam message?

It would be a difficult task. Senders change their addresses, alter their wording and invent new ways to make a message look legitimate.

So modern spam filters use more than a list of fixed rules. Many use machine-learning methods trained on examples of messages and their characteristics.

Some training examples are labelled as spam. Others are labelled as legitimate email. A learning algorithm uses these examples to find patterns that help distinguish between the two.

When a new message arrives, the system can use what it learned to estimate whether the message is likely to be spam.

It does not need to have seen that exact message before. It can recognise patterns that resemble those in its training data.

That is one of the strengths of machine learning.

Google reported in 2019 that Gmail's machine-learning models, working with its other protections, were blocking more than 99.9 per cent of spam, phishing and malware before they reached inboxes. That was Google's reported figure for its system at the time, not a guarantee that every message would be classified correctly.

You have probably seen the mistakes yourself. A legitimate message sometimes lands in the spam folder. A suspicious message sometimes reaches the inbox.

When you report spam or mark a legitimate message as not spam, you can provide useful feedback. How that feedback is used depends on the service and its systems; we should not assume that every click directly retrains a model.

Still, the larger idea is worth understanding.

A learning system uses examples to adjust how it recognises patterns or makes predictions. Depending on the system, it may also be updated as new data becomes available.

**A learning machine uses experience in the form of data to improve a task.**

It does not automatically become wiser about everything. It learns within the limits of its training, design and purpose.

## The ladder

Let us put the idea on a ladder with four rungs.

- A plain machine **follows**. Think of a basic ceiling fan.
- An automatic machine **reacts**. Think of a traditional rice cooker.
- A decision-making machine **chooses**. Think of a navigation app comparing routes.
- A learning machine **improves**. Think of a spam filter trained on examples.

This is a simple teaching model, not a strict scientific classification. Real machines often occupy several rungs at once.

A navigation app can learn from historical traffic patterns and make decisions using those predictions. A spam filter can apply fixed rules as well as learned patterns.

The rungs are not separate boxes. They are ways of looking at what a machine can do.

And notice something else. None of these machines needs a head, arms or a face.

Some of the most useful systems that appear intelligent are simply software running on a phone, a computer or a small electronic board. You may never see the machinery behind them. You only see the result.

## Climb the ladder with a plant

Now let us build something.

Picture a pot of tulasi on your windowsill. Or on the tulasi thara in your courtyard, if your home has one.

We will make a small machine that waters it.

**Rung one: follow.**

Place a small pump beside a water container. Set it to run every morning at six for ten seconds.

The amount of water it delivers depends on the pump, the height it must lift the water, the pipe and other conditions. Check the actual flow with a measuring cup before relying on the timer.

On a rainy July morning, the pump may water the plant even though the soil is already wet. On a hot April day, the soil may dry out sooner than expected.

The machine follows its schedule. It does not know whether the plant needs water.

**Rung two: react.**

Add a soil-moisture sensor.

The sensor gives a reading. It does not know what the plant needs. That is your job. You choose a threshold, a reading that means "dry" for your pot.

Now the controller, the small board that runs your program, checks the sensor reading and runs the pump when the reading crosses the threshold you have set for dry soil.

For a project that will stay in the soil, a capacitive moisture sensor is often a better starting point than a cheap resistive sensor with exposed metal electrodes. Resistive sensors can corrode over time.

But a capacitive sensor is not magic either. Its readings depend on the sensor, the soil and how it is installed. Calibrate it for your pot, and test it before trusting it to control the pump.

You now have a machine that measures a condition and responds to it.

**Rung three: decide.**

Give the machine a few more things to consider.

How dry is the soil? What time is it? Is there enough water in the tank? Has the pump already run several times today?

You can write rules that take these conditions into account.

For example, the machine might water only when the soil is dry enough, the tank contains sufficient water and a minimum interval has passed since the previous watering.

You might prefer to water early in the morning. This is often a sensible choice, particularly if water will reach the leaves as well as the soil. Watering at midday can increase water loss through evaporation, while foliage that remains wet overnight may face a greater risk of fungal disease. Drip watering directly into the soil can also work well at other times.

The correct schedule still depends on the plant, the pot, the soil, the weather and the growing conditions.

And what if the tank is nearly empty?

The machine should stop the pump rather than continue running without sufficient water. A suitable level sensor or another reliable way of detecting an empty tank can help prevent damage.

If you also want a message on your phone, you need a way to communicate with it. A Wi-Fi-enabled board, such as an ESP32, is one option. An Arduino Uno R3 has no Wi-Fi, so it cannot send an internet message without extra networking hardware.

The machine is becoming more capable, but we are still giving it rules to follow.

**Rung four: learn.**

Now let us make the project more interesting.

Let the machine record soil-moisture readings, watering events and perhaps the weather or rainfall, if that information is available.

Over time, you may notice patterns. The pot might dry out faster on hot, sunny days than during a spell of rainy weather. The same plant may need different amounts of water at different stages of growth.

But collecting records alone does not mean the machine has learned anything.

To make it a learning system, we need a method that uses those records to improve its predictions or decisions. We could begin by predicting how quickly the soil will dry. Then we could compare each prediction with what actually happens and use the difference to improve the next prediction.

A simple system could learn from these patterns, provided it has enough useful data and a suitable learning method. It would still need safeguards against overwatering, sensor errors and an empty tank.

And it would need testing. A system that works well for one pot may not work well for another.

That is the difference between recording information and learning from it.

You can begin the first two rungs with a small controller, a moisture sensor, a mini pump, a suitable driver or relay, and a separate power supply appropriate for the pump. The controller must not drive a pump directly unless its electrical specifications permit it. You will also need to protect the electronics from water.

For timed watering, you can use a real-time clock module or a board with a reliable way to obtain the time. For remote notifications, you will need suitable networking hardware and software.

The later rungs require more careful programming, testing and observation.

And remember this. Your tulasi does not care how clever the machine is. It needs the right amount of water, at the right time, without its roots sitting in waterlogged soil.

The point is not to build the cleverest machine. It is to solve the actual problem.

## What "thinking" does not mean

The word *thinking* can mislead us, so let me be careful.

When I call something a thinking machine, I do not mean that it necessarily feels anything or understands the world as a human being does.

A machine can recognise patterns, make predictions and produce useful decisions without us knowing that it has feelings or human-like understanding. Those abilities alone do not establish consciousness.

This distinction matters because intelligent-looking behaviour can be impressive, but it can also hide serious limitations.

A spam filter can confidently put a genuine email in the wrong folder. A navigation app can suggest a route that turns out to be slower. A learning system can make errors when it encounters situations unlike those in its training data.

Researchers have also documented cases where automated systems perform very differently for different groups of people.

In a well-known 2018 study, *Gender Shades*, researchers Joy Buolamwini and Timnit Gebru evaluated three commercial systems that classified gender from facial images.

In their benchmark, the highest error rate for lighter-skinned men was 0.8 per cent. For darker-skinned women, the error rate reached 34.7 per cent.

These figures describe the systems and evaluation used in that particular study. They do not mean that every modern facial-analysis system has those same error rates.

The study nevertheless revealed an important problem. Systems can work much better for some groups than for others. The data used to develop and test a system, and the choices made by its designers, can have real consequences.

A machine is not automatically fair because it uses mathematics. Nor is it automatically reliable because it has learned from a large amount of data.

And a machine cannot decide for us what is worth doing. People still have to choose the purpose, consider the consequences and take responsibility for how the system is used.

So think of a thinking machine as a powerful helper. One that can perform certain tasks quickly and consistently, but whose work still needs to be understood, tested and checked.

## Why this matters to a student in Kerala

Think about the places around you.

A paddy field. A primary health centre. A bank branch. Your school office. The small provision shop near the bus stop.

Each has tasks that repeat every day. Counting. Checking. Sorting. Reminding. Recording.

Someone has to do those jobs. Often, that person is already busy with other work.

A well-designed machine can help with some of the repetitive tasks. It might monitor water levels, remind a shopkeeper when stock is low, organise records or flag an unusual reading for someone to check.

Not every task should be automated. Some require judgement, context, trust or a human conversation. Some are better left alone because the cost of building and maintaining a system is greater than the benefit.

The useful question is not, "Can we make a machine do this?"

It is, "Would a machine doing this actually help?"

You do not need to be a genius to begin. A small electronic board, a sensor and a few inexpensive parts can help you build a machine that measures light, heat or moisture and responds to what it detects.

That is a real beginning.

The more advanced work takes time. You need to understand the problem, learn the tools, test your assumptions and improve the design.

But the path is open.

It starts by looking at an ordinary task and asking what a machine could observe, what it could do with that information and where a person still needs to be involved.

## Four questions to ask about any machine

The next time you encounter a machine that seems clever, ask four questions.

**1. What does it notice?**

What sensors, measurements or other data does it receive?

**2. How does it decide?**

Does it follow a fixed rule, compare several options or use a prediction learned from data?

**3. What did it learn from?**

If it uses machine learning, what examples shaped it? Who selected those examples? What might they have left out?

**4. Who checks it?**

How will anyone discover when it is wrong? What happens when the machine fails?

These questions work for a rice cooker, a map app and a spam filter. They will also work for machines that have not been invented yet.

You may not be able to answer every question immediately. That is fine. Knowing what to ask is a useful beginning.

Once you understand what a machine observes, how it operates and where its limitations lie, it becomes easier to use it wisely. You can begin to improve it, or decide that it is not the right solution at all.

## Where to begin

In my first essay, I asked you to bring a rough idea.

Here is another rough idea for you to bring.

Pick one task that you, or someone near you, does again and again. Write it down in a single line.

Then ask yourself: could a machine help with this task?

Would it only need to follow a schedule? Would it need to react to a sensor? Would it need to compare several choices? Or would it benefit from learning patterns from past examples?

Do not worry if you cannot answer immediately. Start with the simplest version. Build it, test it and see what happens.

A rough idea is a good beginning. You can improve it one step at a time.

A thinking machine is not magic. And it is not as far away as it may seem.

It is a machine that can notice, decide and learn in ways that help us solve particular problems.

And you can learn to build one.