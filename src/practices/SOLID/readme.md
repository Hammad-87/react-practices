# Single-responsibility 
The single-responsibility principle (SRP) is a computer-programming principle that states that every module or class[1] should have responsibility over a single part of the functionality provided by the software, and that responsibility should be entirely encapsulated by the class, module or function. All its services should be narrowly aligned with that responsibility.
#Open-Closed 
In object-oriented programming, the open/closed principle states "software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification
#Liskov substitution
In object-oriented programming, behavioral subtyping is the principle that subclasses should satisfy the expectations of clients accessing subclass objects through references of superclass type, not just as regards syntactic safety (such as absence of "method-not-found" errors) but also as regards behavioral correctness. Specifically, properties that clients can prove using the specification of an object's presumed type should hold even though the object is actually a member of a subtype of that type.
#Interface segregation
In the field of software engineering, the interface-segregation principle (ISP) states that no client should be forced to depend on methods it does not use.[1] ISP splits interfaces that are very large into smaller and more specific ones so that clients will only have to know about the methods that are of interest to them. Such shrunken interfaces are also called role interfaces.[2] ISP is intended to keep a system decoupled and thus easier to refactor, change, and redeploy. ISP is one of the five SOLID principles of object-oriented design, similar to the High Cohesion Principle of GRASP.[3]

# Dependency inversion
In object-oriented design, the dependency inversion principle is a specific form of decoupling software modules. When following this principle, the conventional dependency relationships established from high-level, policy-setting modules to low-level, dependency modules are reversed, thus rendering high-level modules independent of the low-level module implementation details. The principle states:[1]

High-level modules should not depend on low-level modules. Both should depend on abstractions (e.g. interfaces).
Abstractions should not depend on details. Details (concrete implementations) should depend on abstractions.
By dictating that both high-level and low-level objects must depend on the same abstraction, this design principle inverts the way some people may think about object-oriented programming.[2]


[Source](https://en.wikipedia.org/wiki/SOLID)
