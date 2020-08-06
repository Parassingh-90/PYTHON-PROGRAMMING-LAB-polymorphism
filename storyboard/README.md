## Storyboard (Round 2)


Experiment 1: Write a program in python to calculate the area of circle, rectangle and triangle using polymorphism.

### 1. Story Outline:

The experiment is based on the concept of polymorphism, implemented through python. Student approaches the simulator in order to understand the concept of polymorphism. Polymorphism means the ability to take various forms. In this experiment, a function called 'getArea()' is being overloaded with the help of different signatures i.e. different number of parameters for the shapes such as Triangle, Rectangle, and Circle. Student interacts with the simulator by providing some parameter values of a shape which can be a radius of a circle or length of sides of a shape in order to compute the area of corresponding shape. Simulator will provide not only the area of corresponding shape but also helps the student to understand the concept of polymorphism by providing the logical explanation of the output  i.e. how the area is being calculated.

### 2. Story:

Polymorphism is derived from two Greek words: poly and morphs. The word "poly" means many and "morphs" means forms. So, polymorphism means many forms. Polymorphism is a concept by which we can perform a single action in different ways. An operation may exhibit different behavior in different class. The behavior depends on the type of data. We can perform polymorphism in python by method overloading and method overriding. Here, we will focus on method overloading. Method overloading in Python is a feature that allows to have multiple method with same name but different signature. Overloading is the ability of a method to behave in different ways based on the parameters that are passed to the method.<br>
Advantage of method overloading are :<br>
•	Overloading a method fosters reusability. For example, instead of writing multiple methods that differ only slightly, we can write one method and overload it.<br>
•	Overloading also improves code clarity and eliminates complexity.<br>
In Python, we can create a method that can be called in different ways. So, we can have a method that has zero, one or more number of parameters. Depending on the method definition, we can call it with zero, one or more arguments. Given a single method or function, the number of parameters can be specified. Whenever the overloaded function is called the control matches the signature of called method with overloaded method. And executes the definition of the method whose signature is matched. This process of calling the same method in different ways is called method overloading.


#### 2.1 Set the Visual Stage Description:
We divide  our whole simulator page into three pane. On the top of first pane text box will appear in which user has to provide some parameter values of a shape which can be a radius of a circle or length of sides of a shape in order to compute the area of corresponding shape.. This text box is immediately followed by start button then followed by previous and next buttons.<br>
In the second pane user observes the code snippet on the basis of number of parameters given by the given. This pane also helps the student to understand the concept of polymorphism by providing the logical explanation of the output i.e. how the area is being calculated.<br>
When the logical explanation will be completed the area of the corresponding shape will be displayed in the last pane i.e third pane.

#### 2.2 Set User Objectives & Goals:
1.	The prime objective of the experiment is to demonstrate Polymorphism in python and how it allows us to perform a single action in different ways.<br>
2.	The simulator allows the user to input the desired dimensions and based on the input it performs single action (calculation of Area) using different ways.<br>
3.	To explain how method overloading works and how signatures are used to differentiate between two function calls in the run time.<br>
4.	To observe the output (Area) shown by the simulator when the user passes different no of inputs.<br>
5.	To answer the assessment questions based on the observations.<br>

#### 2.3 Set the Pathway Activities:

Describe the pathway activites here : (Guide : Set the pathway activities in line with the learning objectives (LOs)  & with a view to achieve the goals set in round #0 & round#1.  (once he begins, how he will traverse through the entire experiment ? in descriptive))

##### 2.4 Set Challenges and Questions/Complexity/Variations in Questions:

Q. Assume a method getArea() is overloaded, having 0, 1 and 2 parameters respectively. Which of the definition of overloaded method is more likely to be executed if overloaded method is called in such a way : getArea(0) ?<br><br>
A. def getArea(var1,var2):<br>
<b>B. def getArea(var1):</b><br>
C. def getArea():<br>
D. First declared definition of overloaded method<br>
E. None of the above<br> 

##### 2.5 Allow pitfalls:
Describe the pitfalls here: (guide : (while traversing or while solving challenge, how will we bring a situation in front of him that he commits mistake if he is not attentive , or not following procedure , descriptive))

##### 2.6 Conclusion:
1. Assessment/evaluation of the pre-test and post-test should be given immediately to the user. The moment the student clicks on the answer of his choice, the CORRECT ANSWER should be displayed below the question. This would enable the student to understand whether he is right or wrong.
2. This would prompt the users as to how many answers were correctly answered.
3. Marks maybe assigned to each question which would enable the student to calculate his performance.

##### 2.7 Equations/formulas: 
<a href="https://www.codecogs.com/eqnedit.php?latex=\bg_white&space;Area&space;of&space;circle&space;=&space;\prod*r^{2}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\bg_white&space;Area&space;of&space;circle&space;=&space;\prod*r^{2}" title="Area of circle = \prod*r^{2}" /></a>
<br>
<a href="https://www.codecogs.com/eqnedit.php?latex=Area&space;of&space;Rectangle:&space;length&space;\ast&space;breadth" target="_blank"><img src="https://latex.codecogs.com/gif.latex?Area&space;of&space;Rectangle:&space;length&space;\ast&space;breadth" title="Area of Rectangle: length \ast breadth" /></a>
<br>
<a href="https://www.codecogs.com/eqnedit.php?latex=Area&space;of&space;Triangle&space;:&space;\sqrt{p(p-a)(p-b)(p-c)}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?Area&space;of&space;Triangle&space;:&space;\sqrt{p(p-a)(p-b)(p-c)}" title="Area of Triangle : \sqrt{p(p-a)(p-b)(p-c)}" /></a>
<br>
<a href="https://www.codecogs.com/eqnedit.php?latex=Where&space;(p)&space;is:&space;\frac{(a&plus;b&plus;c)}{2}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?Where&space;(p)&space;is:&space;\frac{(a&plus;b&plus;c)}{2}" title="Where (p) is: \frac{(a+b+c)}{2}" /></a>

### 3. Flowchart 
<img src="flowchart/Flowchart.png"/><br>
<br>

### 4. Mindmap:
<img src="mindmap/mindmap.png"/>
 <br>

### 5. Storyboard :
Storyboard: <a href="Storyboard/storyboard.gif"> [here]</a>

