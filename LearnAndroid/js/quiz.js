const quizData = [
  {
    topic: "Kotlin Basics",
    icon: "fas fa-seedling",
    color: "#6c63ff",
    questions: [
      { q: "Which keyword declares an immutable variable in Kotlin?", options: ["var", "val", "let", "const"], answer: 1 },
      { q: "What does the Elvis operator ?: do?", options: ["Compares two values", "Returns right side if left is null", "Throws an exception", "Casts a type"], answer: 1 },
      { q: "What is the output of: println(\"2 + 2 = ${2 + 2}\")?", options: ["2 + 2 = ${2 + 2}", "2 + 2 = 4", "Error", "2 + 2 = 2 + 2"], answer: 1 },
      { q: "Which type allows null values in Kotlin?", options: ["String", "Int", "String?", "Any"], answer: 2 }
    ]
  },
  {
    topic: "Functions",
    icon: "fas fa-code",
    color: "#06b6d4",
    questions: [
      { q: "What is a lambda expression in Kotlin?", options: ["A named function", "An anonymous function", "A class method", "An interface"], answer: 1 },
      { q: "What does 'inline fun' do?", options: ["Makes function private", "Copies function body at call site", "Runs on main thread", "Delays execution"], answer: 1 },
      { q: "Extension functions allow you to:", options: ["Extend a class with inheritance", "Add functions to existing classes without modifying them", "Override existing methods", "Create abstract methods"], answer: 1 },
      { q: "Default parameter values in Kotlin allow:", options: ["Overloading only", "Calling functions without all arguments", "Null safety", "Type inference"], answer: 1 }
    ]
  },
  {
    topic: "Android Basics",
    icon: "fab fa-android",
    color: "#22c55e",
    questions: [
      { q: "What is the entry point of an Android app?", options: ["MainActivity", "Application class", "AndroidManifest.xml", "build.gradle"], answer: 2 },
      { q: "ViewBinding generates:", options: ["XML layouts", "Type-safe binding classes for each layout", "Database schemas", "Network requests"], answer: 1 },
      { q: "Which lifecycle method is called when Activity becomes visible?", options: ["onCreate()", "onStart()", "onResume()", "onRestart()"], answer: 1 },
      { q: "RecyclerView requires which mandatory component?", options: ["Adapter only", "LayoutManager only", "Both Adapter and LayoutManager", "ViewHolder only"], answer: 2 }
    ]
  },
  {
    topic: "Coroutines",
    icon: "fas fa-bolt",
    color: "#f59e0b",
    questions: [
      { q: "What does 'suspend' keyword mean?", options: ["Stops the function permanently", "Function can be paused and resumed", "Runs on background thread", "Cancels coroutine"], answer: 1 },
      { q: "Which dispatcher is best for network calls?", options: ["Dispatchers.Main", "Dispatchers.Default", "Dispatchers.IO", "Dispatchers.Unconfined"], answer: 2 },
      { q: "What is the difference between launch and async?", options: ["No difference", "launch returns Job, async returns Deferred with result", "async is faster", "launch runs on main thread"], answer: 1 },
      { q: "viewModelScope.launch cancels when:", options: ["App goes to background", "ViewModel is cleared", "Fragment is paused", "Activity rotates"], answer: 1 }
    ]
  },
  {
    topic: "Architecture",
    icon: "fas fa-layer-group",
    color: "#8b5cf6",
    questions: [
      { q: "In MVVM, what does ViewModel NOT do?", options: ["Hold UI state", "Survive configuration changes", "Directly reference Activity/Fragment", "Expose LiveData/StateFlow"], answer: 2 },
      { q: "LiveData vs StateFlow — StateFlow:", options: ["Requires Android lifecycle", "Always has an initial value", "Cannot be collected in coroutines", "Is deprecated"], answer: 1 },
      { q: "Clean Architecture separates code into:", options: ["MVC layers", "Data, Domain, Presentation layers", "Activity, Fragment, Service", "Model, View, Controller"], answer: 1 },
      { q: "A UseCase in Clean Architecture:", options: ["Handles UI logic", "Represents a single business operation", "Manages database", "Handles network requests"], answer: 1 }
    ]
  }
];
