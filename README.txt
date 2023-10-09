Alex is writing an web application using React. He has added a text input and a state variable to store the user's input. Alex also wants to know how many times the state variable has been updated so he added a counter. He intended to show the number on the same page. However, he has a bug in his implementation. Can you help Alex debug the issue?


For expected behavior, please refer to expected_behavior.gif.


Please complete the following tasks:
1) Describe the bug in English.
2) Explain what causes the bug in English.
3) Fix the bug and compress your solution as a zip file.
4) Send answers to 1) and 2) and the zip file for 3) to careers@lingoleap.ai.


solution for this task:
1.)Bug Identification:
The bug in Alex's React web application is that the counter for tracking how many times the state variable has been updated is not updating as expected.
2.)Cause of Bug(infinite loop of updates in useEffect):
In this version, you have a useEffect without any dependencies specified (i.e., no second argument array []). This means that the effect runs on every render or re-render of the component.
When this effect runs, it increments the count state by 1. However, since there are no specific dependencies, it runs unconditionally, leading to an infinite loop of updates. This can cause performance issues and unexpected behavior. 
3.)Solution to Fix the Bug
use this ---> `useEffect(() => { setCount(count + 1); }, [value]);` istead of `useEffect(() => setCount(count + 1));`
