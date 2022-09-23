Write a function, topological_order, that takes in a dictionary representing the adjacency list for a directed-acyclic graph. The function should return a list containing the topological-order of the graph.
The topological ordering of a graph is a sequence where "parent nodes" appear before their "children" within the sequence.

topological_order({
  "a": ["f"],
  "b": ["d"],
  "c": ["a", "f"],
  "d": ["e"],
  "e": [],
  "f": ["b", "e"],
}) # -> ['c', 'a', 'f', 'b', 'd', 'e']


topological_order({
  "h": ["l", "m"],
  "i": ["k"],
  "j": ["k", "i"],
  "k": ["h", "m"],
  "l": ["m"],
  "m": [],
}) # -> ['j', 'i', 'k', 'h', 'l', 'm']


question 
	- how do we find the parent of a given node
	
	

  "a": ["f"],
  "b": ["d"],
  "c": ["a", "f"],
  "d": ["e"],
  "e": [],
  "f": ["b", "e"],

C -> a -> f -> b -> d -> e 
	because  we have seen e already, we do not have to traverse down 
path
C
|  \
A -> F —------- 
     |	    \
     B -> D -> E




E <- A -> C
        |  \   |
        v     v
       B → D 

[b, a]

{	
	a:  [B, C, D, E]
	B: [D]
	c: [D]
	d: []
	E: []
}

[a, c, b,d]

notes: 
Iterate through the keys of the graph
but  when we start iterating through the adjacency list, we can make recursive to traverse through the elements in the list
this is a helper function

[d,e]


	A -> B
	  \     |
	       C
[a, b, c]


  e c b a f d
