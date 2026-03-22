// ===== KOTLIN TUTORIAL DATA =====
const kotlinTutorial = [
  {
    id: "basics",
    label: "Basics",
    icon: "fas fa-seedling",
    title: "Kotlin Basics",
    content: `
      <h3>What is Kotlin?</h3>
      <p>Kotlin is a modern, statically typed language by JetBrains — 100% interoperable with Java and Google's preferred language for Android. It eliminates boilerplate, prevents null crashes at compile time, and ships with a powerful standard library.</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:10px;margin:14px 0">
        <div style="background:var(--card-bg);border:1px solid var(--border);border-radius:10px;padding:12px;text-align:center"><i class="fas fa-shield-alt" style="color:#6c63ff;font-size:1.3rem"></i><div style="font-size:0.78rem;font-weight:700;margin-top:6px">Null Safe</div><div style="font-size:0.7rem;color:var(--text-muted)">No NPEs at compile time</div></div>
        <div style="background:var(--card-bg);border:1px solid var(--border);border-radius:10px;padding:12px;text-align:center"><i class="fas fa-feather-alt" style="color:#06b6d4;font-size:1.3rem"></i><div style="font-size:0.78rem;font-weight:700;margin-top:6px">Concise</div><div style="font-size:0.7rem;color:var(--text-muted)">Less code, more clarity</div></div>
        <div style="background:var(--card-bg);border:1px solid var(--border);border-radius:10px;padding:12px;text-align:center"><i class="fab fa-java" style="color:#f59e0b;font-size:1.3rem"></i><div style="font-size:0.78rem;font-weight:700;margin-top:6px">Java Interop</div><div style="font-size:0.7rem;color:var(--text-muted)">100% compatible</div></div>
        <div style="background:var(--card-bg);border:1px solid var(--border);border-radius:10px;padding:12px;text-align:center"><i class="fas fa-bolt" style="color:#22c55e;font-size:1.3rem"></i><div style="font-size:0.78rem;font-weight:700;margin-top:6px">Coroutines</div><div style="font-size:0.7rem;color:var(--text-muted)">Async made easy</div></div>
      </div>
      <h4>val vs var</h4>
      <p><code>val</code> is read-only (like <code>final</code> in Java). <code>var</code> is mutable. Always prefer <code>val</code>.</p>
      <div class="code-block"><div class="code-header"><span class="code-lang">Kotlin</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre><span class="cm">// val — immutable, cannot be reassigned</span>
<span class="kw">val</span> appName: <span class="cls">String</span> = <span class="str">"MyApp"</span>
<span class="kw">val</span> version = <span class="num">2</span>          <span class="cm">// type inferred as Int</span>
<span class="cm">// version = 3           ← compile error!</span>

<span class="cm">// var — mutable</span>
<span class="kw">var</span> score: <span class="cls">Int</span> = <span class="num">0</span>
score += <span class="num">10</span>             <span class="cm">// ✓ allowed</span>

<span class="cm">// Type inference — Kotlin figures out the type</span>
<span class="kw">val</span> pi = <span class="num">3.14159</span>        <span class="cm">// Double</span>
<span class="kw">val</span> isLoggedIn = <span class="kw">true</span>   <span class="cm">// Boolean</span>
<span class="kw">val</span> letter = <span class="str">'K'</span>        <span class="cm">// Char</span></pre></div>
      <div class="kt-callout" style="border-left:3px solid #f59e0b;background:#f59e0b18;padding:10px 14px;border-radius:0 8px 8px 0;margin:12px 0;font-size:0.85rem;display:flex;gap:10px;align-items:flex-start"><i class="fas fa-lightbulb" style="color:#f59e0b;margin-top:2px;flex-shrink:0"></i><span>Always prefer <code>val</code> over <code>var</code>. Immutability makes code easier to reason about and prevents accidental state changes.</span></div>
      <h4>All Primitive Types</h4>
      <div class="code-block"><div class="code-header"><span class="code-lang">Kotlin</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre><span class="kw">val</span> byteVal:   <span class="cls">Byte</span>    = <span class="num">127</span>
<span class="kw">val</span> shortVal:  <span class="cls">Short</span>   = <span class="num">32767</span>
<span class="kw">val</span> intVal:    <span class="cls">Int</span>     = <span class="num">2_147_483_647</span>   <span class="cm">// underscores for readability</span>
<span class="kw">val</span> longVal:   <span class="cls">Long</span>    = <span class="num">9_223_372_036L</span>
<span class="kw">val</span> floatVal:  <span class="cls">Float</span>   = <span class="num">3.14f</span>
<span class="kw">val</span> doubleVal: <span class="cls">Double</span>  = <span class="num">3.141592653589793</span>
<span class="kw">val</span> boolVal:   <span class="cls">Boolean</span> = <span class="kw">true</span>
<span class="kw">val</span> charVal:   <span class="cls">Char</span>    = <span class="str">'K'</span>

<span class="cm">// Explicit type conversions (no implicit casting)</span>
<span class="kw">val</span> x: <span class="cls">Int</span> = <span class="num">42</span>
<span class="kw">val</span> y: <span class="cls">Long</span>   = x.<span class="fn">toLong</span>()
<span class="kw">val</span> z: <span class="cls">Double</span> = x.<span class="fn">toDouble</span>()</pre></div>
      <h4>String Templates &amp; Multi-line Strings</h4>
      <div class="code-block"><div class="code-header"><span class="code-lang">Kotlin</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre><span class="kw">val</span> name = <span class="str">"Alice"</span>
<span class="kw">val</span> age  = <span class="num">28</span>

<span class="cm">// $ for simple vars, \${} for expressions</span>
println(<span class="str">"Hello, <span class="ann">\$name</span>!"</span>)                 <span class="cm">// Hello, Alice!</span>
println(<span class="str">"Next year: <span class="ann">\${age + 1}</span>"</span>)          <span class="cm">// Next year: 29</span>
println(<span class="str">"Upper: <span class="ann">\${name.uppercase()}</span>"</span>)      <span class="cm">// Upper: ALICE</span>

<span class="cm">// Triple-quoted raw string</span>
<span class="kw">val</span> json = <span class="str">"""
    {
        "user": "<span class="ann">\$name</span>",
        "age":  <span class="ann">\$age</span>
    }
"""</span>.<span class="fn">trimIndent</span>()

<span class="cm">// Common String operations</span>
<span class="kw">val</span> s = <span class="str">"Kotlin"</span>
println(s.<span class="fn">length</span>)           <span class="cm">// 6</span>
println(s.<span class="fn">reversed</span>())       <span class="cm">// niltoK</span>
println(s.<span class="fn">uppercase</span>())      <span class="cm">// KOTLIN</span>
println(s.<span class="fn">contains</span>(<span class="str">"lin"</span>))  <span class="cm">// true</span>
println(s.<span class="fn">substring</span>(<span class="num">0</span>, <span class="num">3</span>))  <span class="cm">// Kot</span>
println(s.<span class="fn">replace</span>(<span class="str">"K"</span>, <span class="str">"J"</span>)) <span class="cm">// Jotlin</span></pre></div>
      <h4>Control Flow</h4>
      <div class="code-block"><div class="code-header"><span class="code-lang">Kotlin</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre><span class="cm">// if as an expression (returns a value)</span>
<span class="kw">val</span> a = <span class="num">10</span>; <span class="kw">val</span> b = <span class="num">20</span>
<span class="kw">val</span> max = <span class="kw">if</span> (a > b) a <span class="kw">else</span> b   <span class="cm">// 20</span>

<span class="cm">// when — Kotlin's powerful switch/match</span>
<span class="kw">val</span> grade = <span class="num">85</span>
<span class="kw">val</span> letter = <span class="kw">when</span> {
    grade >= <span class="num">90</span> -> <span class="str">"A"</span>
    grade >= <span class="num">80</span> -> <span class="str">"B"</span>
    grade >= <span class="num">70</span> -> <span class="str">"C"</span>
    <span class="kw">else</span>        -> <span class="str">"F"</span>
}  <span class="cm">// "B"</span>

<span class="cm">// when with a value</span>
<span class="kw">val</span> day = <span class="num">3</span>
<span class="kw">val</span> dayName = <span class="kw">when</span> (day) {
    <span class="num">1</span>       -> <span class="str">"Monday"</span>
    <span class="num">2</span>       -> <span class="str">"Tuesday"</span>
    <span class="num">3</span>       -> <span class="str">"Wednesday"</span>
    <span class="kw">in</span> <span class="num">4</span>..<span class="num">5</span> -> <span class="str">"Thu or Fri"</span>
    <span class="kw">else</span>    -> <span class="str">"Weekend"</span>
}

<span class="cm">// Loops</span>
<span class="kw">for</span> (i <span class="kw">in</span> <span class="num">1</span>..<span class="num">5</span>)            print(<span class="str">"<span class="ann">\$i</span> "</span>)  <span class="cm">// 1 2 3 4 5</span>
<span class="kw">for</span> (i <span class="kw">in</span> <span class="num">5</span> <span class="kw">downTo</span> <span class="num">1</span>)    print(<span class="str">"<span class="ann">\$i</span> "</span>)  <span class="cm">// 5 4 3 2 1</span>
<span class="kw">for</span> (i <span class="kw">in</span> <span class="num">0</span>..<span class="num">10</span> <span class="kw">step</span> <span class="num">2</span>)  print(<span class="str">"<span class="ann">\$i</span> "</span>)  <span class="cm">// 0 2 4 6 8 10</span>

<span class="kw">var</span> n = <span class="num">3</span>
<span class="kw">while</span> (n > <span class="num">0</span>) { print(<span class="str">"<span class="ann">\$n</span> "</span>); n-- }   <span class="cm">// 3 2 1</span></pre></div>
    `
  },
  {
    id: "functions",
    label: "Functions",
    icon: "fas fa-infinity",
    title: "Functions in Kotlin",
    content: `
      <h3>Functions — First-Class Citizens</h3>
      <p>In Kotlin, functions are first-class — stored in variables, passed as arguments, returned from other functions. They support default params, named args, varargs, infix notation, and extension functions.</p>
      <h4>Basic Syntax</h4>
      <div class="code-block"><div class="code-header"><span class="code-lang">Kotlin</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre><span class="cm">// Standard function</span>
<span class="kw">fun</span> <span class="fn">greet</span>(name: <span class="cls">String</span>): <span class="cls">String</span> {
    <span class="kw">return</span> <span class="str">"Hello, <span class="ann">\$name</span>!"</span>
}

<span class="cm">// Single-expression (body = expression after =)</span>
<span class="kw">fun</span> <span class="fn">add</span>(a: <span class="cls">Int</span>, b: <span class="cls">Int</span>) = a + b
<span class="kw">fun</span> <span class="fn">square</span>(n: <span class="cls">Int</span>) = n * n

<span class="cm">// Default parameters</span>
<span class="kw">fun</span> <span class="fn">createUser</span>(name: <span class="cls">String</span>, role: <span class="cls">String</span> = <span class="str">"User"</span>, active: <span class="cls">Boolean</span> = <span class="kw">true</span>) {
    println(<span class="str">"<span class="ann">\$name</span> | <span class="ann">\$role</span> | active=<span class="ann">\$active</span>"</span>)
}
<span class="fn">createUser</span>(<span class="str">"Bob"</span>)                        <span class="cm">// Bob | User | active=true</span>
<span class="fn">createUser</span>(<span class="str">"Alice"</span>, role = <span class="str">"Admin"</span>)     <span class="cm">// named arg — skip active</span>

<span class="cm">// Named arguments (any order)</span>
<span class="fn">createUser</span>(active = <span class="kw">false</span>, name = <span class="str">"Eve"</span>, role = <span class="str">"Guest"</span>)

<span class="cm">// Varargs</span>
<span class="kw">fun</span> <span class="fn">sum</span>(<span class="kw">vararg</span> nums: <span class="cls">Int</span>) = nums.<span class="fn">sum</span>()
println(<span class="fn">sum</span>(<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>))  <span class="cm">// 10</span>

<span class="cm">// Unit = void (can be omitted)</span>
<span class="kw">fun</span> <span class="fn">log</span>(msg: <span class="cls">String</span>): <span class="cls">Unit</span> = println(msg)</pre></div>
      <h4>Lambdas &amp; Higher-Order Functions</h4>
      <div class="code-block"><div class="code-header"><span class="code-lang">Kotlin</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre><span class="cm">// Lambda syntax: { params -> body }</span>
<span class="kw">val</span> double: (<span class="cls">Int</span>) -> <span class="cls">Int</span> = { x -> x * <span class="num">2</span> }
<span class="kw">val</span> greetLambda = { name: <span class="cls">String</span> -> <span class="str">"Hi <span class="ann">\$name</span>"</span> }

<span class="cm">// 'it' — implicit single parameter</span>
<span class="kw">val</span> isEven: (<span class="cls">Int</span>) -> <span class="cls">Boolean</span> = { it % <span class="num">2</span> == <span class="num">0</span> }

<span class="cm">// Higher-order function</span>
<span class="kw">fun</span> <span class="fn">operate</span>(a: <span class="cls">Int</span>, b: <span class="cls">Int</span>, op: (<span class="cls">Int</span>, <span class="cls">Int</span>) -> <span class="cls">Int</span>) = <span class="fn">op</span>(a, b)
println(<span class="fn">operate</span>(<span class="num">6</span>, <span class="num">7</span>) { x, y -> x * y })  <span class="cm">// 42</span>

<span class="cm">// Trailing lambda syntax (last param)</span>
<span class="kw">val</span> nums = <span class="fn">listOf</span>(<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>)
nums.<span class="fn">filter</span> { it > <span class="num">2</span> }.<span class="fn">forEach</span> { println(it) }

<span class="cm">// Function references</span>
<span class="kw">fun</span> <span class="fn">isPositive</span>(n: <span class="cls">Int</span>) = n > <span class="num">0</span>
<span class="kw">val</span> positives = nums.<span class="fn">filter</span>(::<span class="fn">isPositive</span>)</pre></div>
      <h4>Extension Functions</h4>
      <p>Add new functions to existing classes without modifying them — even to classes you don't own.</p>
      <div class="code-block"><div class="code-header"><span class="code-lang">Kotlin</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre><span class="cm">// Extend String</span>
<span class="kw">fun</span> <span class="cls">String</span>.<span class="fn">isPalindrome</span>() = <span class="kw">this</span> == <span class="kw">this</span>.<span class="fn">reversed</span>()
<span class="kw">fun</span> <span class="cls">String</span>.<span class="fn">titleCase</span>() = <span class="fn">split</span>(<span class="str">" "</span>).<span class="fn">joinToString</span>(<span class="str">" "</span>) { it.<span class="fn">replaceFirstChar</span>(Char::uppercaseChar) }

println(<span class="str">"racecar"</span>.<span class="fn">isPalindrome</span>())   <span class="cm">// true</span>
println(<span class="str">"hello world"</span>.<span class="fn">titleCase</span>())  <span class="cm">// Hello World</span>

<span class="cm">// Extend Int</span>
<span class="kw">fun</span> <span class="cls">Int</span>.<span class="fn">isEven</span>() = <span class="kw">this</span> % <span class="num">2</span> == <span class="num">0</span>
<span class="kw">fun</span> <span class="cls">Int</span>.<span class="fn">factorial</span>(): <span class="cls">Long</span> = <span class="kw">if</span> (<span class="kw">this</span> <= <span class="num">1</span>) <span class="num">1L</span> <span class="kw">else</span> <span class="kw">this</span> * (<span class="kw">this</span> - <span class="num">1</span>).<span class="fn">factorial</span>()

println(<span class="num">4</span>.<span class="fn">isEven</span>())     <span class="cm">// true</span>
println(<span class="num">5</span>.<span class="fn">factorial</span>())  <span class="cm">// 120</span>

<span class="cm">// Infix functions</span>
<span class="kw">infix fun</span> <span class="cls">Int</span>.<span class="fn">pow</span>(exp: <span class="cls">Int</span>): <span class="cls">Int</span> = <span class="fn">Math</span>.<span class="fn">pow</span>(<span class="kw">this</span>.<span class="fn">toDouble</span>(), exp.<span class="fn">toDouble</span>()).<span class="fn">toInt</span>()
println(<span class="num">2</span> <span class="fn">pow</span> <span class="num">10</span>)  <span class="cm">// 1024</span></pre></div>
      <h4>Inline &amp; Reified Functions</h4>
      <div class="code-block"><div class="code-header"><span class="code-lang">Kotlin</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre><span class="cm">// inline — avoids lambda overhead, enables reified</span>
<span class="kw">inline fun</span> <span class="fn">measure</span>(block: () -> <span class="cls">Unit</span>): <span class="cls">Long</span> {
    <span class="kw">val</span> start = <span class="cls">System</span>.<span class="fn">currentTimeMillis</span>()
    <span class="fn">block</span>()
    <span class="kw">return</span> <span class="cls">System</span>.<span class="fn">currentTimeMillis</span>() - start
}

<span class="cm">// reified — access type T at runtime</span>
<span class="kw">inline fun</span> &lt;<span class="kw">reified</span> T&gt; <span class="fn">isType</span>(value: <span class="cls">Any</span>) = value <span class="kw">is</span> T
println(<span class="fn">isType</span>&lt;<span class="cls">String</span>&gt;(<span class="str">"hello"</span>))  <span class="cm">// true</span>
println(<span class="fn">isType</span>&lt;<span class="cls">Int</span>&gt;(<span class="str">"hello"</span>))     <span class="cm">// false</span>

<span class="cm">// Practical: safe cast helper</span>
<span class="kw">inline fun</span> &lt;<span class="kw">reified</span> T&gt; <span class="cls">Any</span>.<span class="fn">castOrNull</span>(): T? = <span class="kw">this</span> <span class="kw">as</span>? T
<span class="kw">val</span> num: <span class="cls">Int</span>? = <span class="str">"hello"</span>.<span class="fn">castOrNull</span>&lt;<span class="cls">Int</span>&gt;()  <span class="cm">// null</span></pre></div>
    `
  },
  {
    id: "classes",
    label: "Classes & OOP",
    icon: "fas fa-cubes",
    title: "Classes & OOP",
    content: `
      <h3>Object-Oriented Programming</h3>
      <p>Kotlin has concise class syntax with powerful OOP features: primary constructors, data classes, sealed classes, object declarations, companion objects, and delegation.</p>
      <h4>Classes &amp; Constructors</h4>
      <div class="code-block"><div class="code-header"><span class="code-lang">Kotlin</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre><span class="cm">// Primary constructor in class header</span>
<span class="kw">class</span> <span class="cls">Person</span>(<span class="kw">val</span> name: <span class="cls">String</span>, <span class="kw">var</span> age: <span class="cls">Int</span>) {
    <span class="cm">// init block runs after primary constructor</span>
    <span class="kw">init</span> {
        <span class="fn">require</span>(age >= <span class="num">0</span>) { <span class="str">"Age cannot be negative"</span> }
    }

    <span class="cm">// Secondary constructor</span>
    <span class="kw">constructor</span>(name: <span class="cls">String</span>) : <span class="kw">this</span>(name, <span class="num">0</span>)

    <span class="cm">// Computed property</span>
    <span class="kw">val</span> isAdult: <span class="cls">Boolean</span> get() = age >= <span class="num">18</span>

    <span class="kw">fun</span> <span class="fn">introduce</span>() = <span class="str">"I'm <span class="ann">\$name</span>, <span class="ann">\$age</span> years old"</span>
    <span class="kw">override fun</span> <span class="fn">toString</span>() = <span class="str">"Person(name=<span class="ann">\$name</span>, age=<span class="ann">\$age</span>)"</span>
}

<span class="kw">val</span> p = <span class="cls">Person</span>(<span class="str">"Alice"</span>, <span class="num">28</span>)
println(p.<span class="fn">introduce</span>())  <span class="cm">// I'm Alice, 28 years old</span>
println(p.isAdult)       <span class="cm">// true</span></pre></div>
      <h4>Data Classes</h4>
      <p>Auto-generates <code>equals()</code>, <code>hashCode()</code>, <code>toString()</code>, <code>copy()</code>, and <code>componentN()</code> functions.</p>
      <div class="code-block"><div class="code-header"><span class="code-lang">Kotlin</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre><span class="kw">data class</span> <span class="cls">User</span>(<span class="kw">val</span> id: <span class="cls">Int</span>, <span class="kw">val</span> name: <span class="cls">String</span>, <span class="kw">val</span> email: <span class="cls">String</span>)

<span class="kw">val</span> u1 = <span class="cls">User</span>(<span class="num">1</span>, <span class="str">"Alice"</span>, <span class="str">"alice@example.com"</span>)
<span class="kw">val</span> u2 = u1.<span class="fn">copy</span>(name = <span class="str">"Bob"</span>, email = <span class="str">"bob@example.com"</span>)

println(u1)          <span class="cm">// User(id=1, name=Alice, email=alice@example.com)</span>
println(u1 == u2)    <span class="cm">// false (structural equality)</span>

<span class="cm">// Destructuring</span>
<span class="kw">val</span> (id, name, email) = u1
println(<span class="str">"<span class="ann">\$id</span> — <span class="ann">\$name</span>"</span>)  <span class="cm">// 1 — Alice</span></pre></div>
      <h4>Sealed Classes</h4>
      <p>Sealed classes restrict class hierarchies — perfect for representing UI state or API results.</p>
      <div class="code-block"><div class="code-header"><span class="code-lang">Kotlin</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre><span class="kw">sealed class</span> <span class="cls">UiState</span>&lt;<span class="kw">out</span> T&gt; {
    <span class="kw">object</span> <span class="cls">Loading</span> : <span class="cls">UiState</span>&lt;<span class="cls">Nothing</span>&gt;()
    <span class="kw">data class</span> <span class="cls">Success</span>&lt;T&gt;(<span class="kw">val</span> data: T) : <span class="cls">UiState</span>&lt;T&gt;()
    <span class="kw">data class</span> <span class="cls">Error</span>(<span class="kw">val</span> message: <span class="cls">String</span>) : <span class="cls">UiState</span>&lt;<span class="cls">Nothing</span>&gt;()
}

<span class="cm">// when is exhaustive with sealed classes</span>
<span class="kw">fun</span> <span class="fn">render</span>(state: <span class="cls">UiState</span>&lt;<span class="cls">String</span>&gt;) = <span class="kw">when</span> (state) {
    <span class="kw">is</span> <span class="cls">UiState</span>.<span class="cls">Loading</span>  -> <span class="str">"Showing spinner..."</span>
    <span class="kw">is</span> <span class="cls">UiState</span>.<span class="cls">Success</span>  -> <span class="str">"Data: <span class="ann">\${state.data}</span>"</span>
    <span class="kw">is</span> <span class="cls">UiState</span>.<span class="cls">Error</span>    -> <span class="str">"Error: <span class="ann">\${state.message}</span>"</span>
}</pre></div>
      <h4>Inheritance, Interfaces &amp; Object</h4>
      <div class="code-block"><div class="code-header"><span class="code-lang">Kotlin</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre><span class="cm">// Interface with default implementation</span>
<span class="kw">interface</span> <span class="cls">Drawable</span> {
    <span class="kw">fun</span> <span class="fn">draw</span>()
    <span class="kw">fun</span> <span class="fn">describe</span>() = <span class="str">"I am drawable"</span>  <span class="cm">// default impl</span>
}

<span class="cm">// open = can be subclassed</span>
<span class="kw">open class</span> <span class="cls">Shape</span>(<span class="kw">val</span> color: <span class="cls">String</span>) : <span class="cls">Drawable</span> {
    <span class="kw">override fun</span> <span class="fn">draw</span>() = println(<span class="str">"Drawing <span class="ann">\$color</span> shape"</span>)
}

<span class="kw">class</span> <span class="cls">Circle</span>(color: <span class="cls">String</span>, <span class="kw">val</span> radius: <span class="cls">Float</span>) : <span class="cls">Shape</span>(color) {
    <span class="kw">override fun</span> <span class="fn">draw</span>() = println(<span class="str">"Circle r=<span class="ann">\$radius</span> color=<span class="ann">\$color</span>"</span>)
}

<span class="cm">// object — singleton</span>
<span class="kw">object</span> <span class="cls">AppConfig</span> {
    <span class="kw">const val</span> BASE_URL = <span class="str">"https://api.example.com"</span>
    <span class="kw">var</span> debug = <span class="kw">false</span>
}

<span class="cm">// companion object — static-like members</span>
<span class="kw">class</span> <span class="cls">ApiClient</span> {
    <span class="kw">companion object</span> {
        <span class="kw">fun</span> <span class="fn">create</span>() = <span class="cls">ApiClient</span>()
        <span class="kw">const val</span> TIMEOUT = <span class="num">30</span>
    }
}
<span class="kw">val</span> client = <span class="cls">ApiClient</span>.<span class="fn">create</span>()</pre></div>
    `
  },
  {
    id: "collections",
    label: "Collections",
    icon: "fas fa-layer-group",
    title: "Collections & Functional Ops",
    content: `
      <h3>Kotlin Collections</h3>
      <p>Kotlin separates read-only and mutable collections. The standard library ships with powerful functional operators — <code>filter</code>, <code>map</code>, <code>reduce</code>, <code>flatMap</code>, <code>groupBy</code>, and many more.</p>
      <h4>List, Set &amp; Map</h4>
      <div class="code-block"><div class="code-header"><span class="code-lang">Kotlin</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre><span class="cm">// Read-only (immutable references)</span>
<span class="kw">val</span> fruits  = <span class="fn">listOf</span>(<span class="str">"Apple"</span>, <span class="str">"Banana"</span>, <span class="str">"Cherry"</span>)
<span class="kw">val</span> ids     = <span class="fn">setOf</span>(<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">2</span>)   <span class="cm">// {1, 2, 3} — no duplicates</span>
<span class="kw">val</span> scores  = <span class="fn">mapOf</span>(<span class="str">"Alice"</span> to <span class="num">95</span>, <span class="str">"Bob"</span> to <span class="num">87</span>)

<span class="cm">// Mutable variants</span>
<span class="kw">val</span> list = <span class="fn">mutableListOf</span>(<span class="str">"a"</span>, <span class="str">"b"</span>)
list.<span class="fn">add</span>(<span class="str">"c"</span>); list.<span class="fn">remove</span>(<span class="str">"a"</span>)

<span class="kw">val</span> map = <span class="fn">mutableMapOf</span>(<span class="str">"x"</span> to <span class="num">1</span>)
map[<span class="str">"y"</span>] = <span class="num">2</span>

<span class="cm">// Access</span>
println(fruits[<span class="num">0</span>])              <span class="cm">// Apple</span>
println(fruits.<span class="fn">first</span>())         <span class="cm">// Apple</span>
println(fruits.<span class="fn">last</span>())          <span class="cm">// Cherry</span>
println(fruits.<span class="fn">getOrNull</span>(<span class="num">10</span>))  <span class="cm">// null (safe)</span>
println(scores[<span class="str">"Alice"</span>])        <span class="cm">// 95</span>
println(scores.<span class="fn">getOrDefault</span>(<span class="str">"Eve"</span>, <span class="num">0</span>))  <span class="cm">// 0</span></pre></div>
      <h4>Functional Operators</h4>
      <div class="code-block"><div class="code-header"><span class="code-lang">Kotlin</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre><span class="kw">val</span> numbers = (<span class="num">1</span>..<span class="num">10</span>).<span class="fn">toList</span>()

<span class="cm">// filter — keep matching elements</span>
<span class="kw">val</span> evens   = numbers.<span class="fn">filter</span> { it % <span class="num">2</span> == <span class="num">0</span> }       <span class="cm">// [2,4,6,8,10]</span>

<span class="cm">// map — transform each element</span>
<span class="kw">val</span> doubled = numbers.<span class="fn">map</span> { it * <span class="num">2</span> }               <span class="cm">// [2,4,6,...,20]</span>

<span class="cm">// reduce / fold</span>
<span class="kw">val</span> sum     = numbers.<span class="fn">reduce</span> { acc, n -> acc + n }  <span class="cm">// 55</span>
<span class="kw">val</span> product = numbers.<span class="fn">fold</span>(<span class="num">1</span>) { acc, n -> acc * n } <span class="cm">// 3628800</span>

<span class="cm">// groupBy — returns Map&lt;K, List&lt;V&gt;&gt;</span>
<span class="kw">val</span> grouped = numbers.<span class="fn">groupBy</span> { <span class="kw">if</span> (it % <span class="num">2</span> == <span class="num">0</span>) <span class="str">"even"</span> <span class="kw">else</span> <span class="str">"odd"</span> }

<span class="cm">// flatMap — flatten nested lists</span>
<span class="kw">val</span> nested = <span class="fn">listOf</span>(<span class="fn">listOf</span>(<span class="num">1</span>,<span class="num">2</span>), <span class="fn">listOf</span>(<span class="num">3</span>,<span class="num">4</span>))
<span class="kw">val</span> flat    = nested.<span class="fn">flatMap</span> { it }                 <span class="cm">// [1,2,3,4]</span>

<span class="cm">// sortedBy, distinctBy, take, drop</span>
<span class="kw">val</span> top3    = numbers.<span class="fn">sortedByDescending</span> { it }.<span class="fn">take</span>(<span class="num">3</span>)  <span class="cm">// [10,9,8]</span>
<span class="kw">val</span> unique  = <span class="fn">listOf</span>(<span class="num">1</span>,<span class="num">2</span>,<span class="num">2</span>,<span class="num">3</span>).<span class="fn">distinct</span>()               <span class="cm">// [1,2,3]</span>

<span class="cm">// any, all, none, count</span>
println(numbers.<span class="fn">any</span>  { it > <span class="num">9</span> })   <span class="cm">// true</span>
println(numbers.<span class="fn">all</span>  { it > <span class="num">0</span> })   <span class="cm">// true</span>
println(numbers.<span class="fn">none</span> { it > <span class="num">10</span> })  <span class="cm">// true</span>
println(numbers.<span class="fn">count</span>{ it % <span class="num">3</span> == <span class="num">0</span> }) <span class="cm">// 3</span></pre></div>
      <h4>Sequences — Lazy Evaluation</h4>
      <p>Use <code>asSequence()</code> for large collections to avoid creating intermediate lists.</p>
      <div class="code-block"><div class="code-header"><span class="code-lang">Kotlin</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre><span class="cm">// Eager (creates 3 intermediate lists)</span>
<span class="kw">val</span> eager = (<span class="num">1</span>..<span class="num">1_000_000</span>)
    .<span class="fn">filter</span> { it % <span class="num">2</span> == <span class="num">0</span> }
    .<span class="fn">map</span> { it * <span class="num">3</span> }
    .<span class="fn">take</span>(<span class="num">5</span>)

<span class="cm">// Lazy (processes one element at a time, stops at 5)</span>
<span class="kw">val</span> lazy = (<span class="num">1</span>..<span class="num">1_000_000</span>).<span class="fn">asSequence</span>()
    .<span class="fn">filter</span> { it % <span class="num">2</span> == <span class="num">0</span> }
    .<span class="fn">map</span> { it * <span class="num">3</span> }
    .<span class="fn">take</span>(<span class="num">5</span>)
    .<span class="fn">toList</span>()  <span class="cm">// [6, 12, 18, 24, 30]</span></pre></div>
      <div class="kt-callout" style="border-left:3px solid #22c55e;background:#22c55e18;padding:10px 14px;border-radius:0 8px 8px 0;margin:12px 0;font-size:0.85rem;display:flex;gap:10px;align-items:flex-start"><i class="fas fa-rocket" style="color:#22c55e;margin-top:2px;flex-shrink:0"></i><span>Use <code>asSequence()</code> when chaining multiple operations on large collections (1000+ items). It avoids allocating intermediate lists and can be significantly faster.</span></div>
    `
  },
  {
    id: "coroutines",
    label: "Coroutines",
    icon: "fas fa-bolt",
    title: "Coroutines & Flow",
    content: `
      <h3>Kotlin Coroutines</h3>
      <p>Coroutines are lightweight, suspendable computations. They let you write async code that looks sequential — no callbacks, no RxJava chains. Essential for Android networking, database, and any I/O work.</p>
      <div class="kt-callout" style="border-left:3px solid #6c63ff;background:#6c63ff18;padding:10px 14px;border-radius:0 8px 8px 0;margin:12px 0;font-size:0.85rem;display:flex;gap:10px;align-items:flex-start"><i class="fas fa-info-circle" style="color:#6c63ff;margin-top:2px;flex-shrink:0"></i><span>Add to build.gradle: <code>implementation "org.jetbrains.kotlinx:kotlinx-coroutines-android:1.7.3"</code></span></div>
      <h4>Coroutine Builders &amp; Scope</h4>
      <div class="code-block"><div class="code-header"><span class="code-lang">Kotlin</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre><span class="cm">// launch — fire and forget, returns Job</span>
<span class="kw">val</span> job = <span class="fn">GlobalScope</span>.<span class="fn">launch</span> {
    <span class="fn">delay</span>(<span class="num">1000L</span>)
    println(<span class="str">"Done after 1s"</span>)
}

<span class="cm">// async — returns Deferred&lt;T&gt; (like a Future)</span>
<span class="kw">val</span> deferred = <span class="fn">GlobalScope</span>.<span class="fn">async</span> {
    <span class="fn">delay</span>(<span class="num">500L</span>)
    <span class="str">"Result"</span>
}
<span class="kw">val</span> result = deferred.<span class="fn">await</span>()  <span class="cm">// suspends until done</span>

<span class="cm">// Parallel execution with async</span>
<span class="kw">val</span> (user, posts) = <span class="fn">coroutineScope</span> {
    <span class="kw">val</span> u = <span class="fn">async</span> { <span class="fn">fetchUser</span>() }
    <span class="kw">val</span> p = <span class="fn">async</span> { <span class="fn">fetchPosts</span>() }
    u.<span class="fn">await</span>() to p.<span class="fn">await</span>()   <span class="cm">// both run in parallel!</span>
}</pre></div>
      <h4>Suspend Functions &amp; Dispatchers</h4>
      <div class="code-block"><div class="code-header"><span class="code-lang">Kotlin</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre><span class="cm">// suspend = can be paused without blocking a thread</span>
<span class="kw">suspend fun</span> <span class="fn">fetchUser</span>(id: <span class="cls">Int</span>): <span class="cls">User</span> {
    <span class="kw">return</span> <span class="fn">withContext</span>(<span class="cls">Dispatchers</span>.IO) {  <span class="cm">// switch to IO thread pool</span>
        api.<span class="fn">getUser</span>(id)
    }
}

<span class="cm">// Dispatchers:</span>
<span class="cm">// Dispatchers.Main   — UI thread (Android)</span>
<span class="cm">// Dispatchers.IO     — network, disk (up to 64 threads)</span>
<span class="cm">// Dispatchers.Default — CPU-intensive work</span>

<span class="cm">// In ViewModel — viewModelScope auto-cancels on clear</span>
<span class="kw">fun</span> <span class="fn">loadUser</span>(id: <span class="cls">Int</span>) {
    viewModelScope.<span class="fn">launch</span> {
        _state.<span class="fn">value</span> = <span class="cls">UiState</span>.<span class="cls">Loading</span>
        <span class="kw">try</span> {
            <span class="kw">val</span> user = <span class="fn">fetchUser</span>(id)   <span class="cm">// suspends here</span>
            _state.<span class="fn">value</span> = <span class="cls">UiState</span>.<span class="cls">Success</span>(user)
        } <span class="kw">catch</span> (e: <span class="cls">Exception</span>) {
            _state.<span class="fn">value</span> = <span class="cls">UiState</span>.<span class="cls">Error</span>(e.<span class="fn">message</span> ?: <span class="str">"Unknown error"</span>)
        }
    }
}</pre></div>
      <h4>Flow — Reactive Streams</h4>
      <p>Flow is a cold, asynchronous stream of values. Think of it as a suspendable sequence.</p>
      <div class="code-block"><div class="code-header"><span class="code-lang">Kotlin</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre><span class="cm">// Create a flow</span>
<span class="kw">fun</span> <span class="fn">tickerFlow</span>(period: <span class="cls">Long</span>) = <span class="fn">flow</span> {
    <span class="kw">var</span> tick = <span class="num">0</span>
    <span class="kw">while</span> (<span class="kw">true</span>) {
        <span class="fn">emit</span>(tick++)
        <span class="fn">delay</span>(period)
    }
}

<span class="cm">// Collect in lifecycle-aware scope</span>
viewLifecycleOwner.lifecycleScope.<span class="fn">launch</span> {
    <span class="fn">repeatOnLifecycle</span>(<span class="cls">Lifecycle</span>.<span class="cls">State</span>.<span class="cls">STARTED</span>) {
        viewModel.uiState.<span class="fn">collect</span> { state ->
            <span class="kw">when</span> (state) {
                <span class="kw">is</span> <span class="cls">UiState</span>.<span class="cls">Loading</span>  -> <span class="fn">showSpinner</span>()
                <span class="kw">is</span> <span class="cls">UiState</span>.<span class="cls">Success</span>  -> <span class="fn">showData</span>(state.data)
                <span class="kw">is</span> <span class="cls">UiState</span>.<span class="cls">Error</span>    -> <span class="fn">showError</span>(state.message)
            }
        }
    }
}

<span class="cm">// Flow operators</span>
<span class="fn">tickerFlow</span>(<span class="num">500L</span>)
    .<span class="fn">take</span>(<span class="num">5</span>)
    .<span class="fn">filter</span> { it % <span class="num">2</span> == <span class="num">0</span> }
    .<span class="fn">map</span> { <span class="str">"Tick <span class="ann">\$it</span>"</span> }
    .<span class="fn">collect</span> { println(it) }  <span class="cm">// Tick 0, Tick 2, Tick 4</span></pre></div>
      <h4>StateFlow &amp; SharedFlow</h4>
      <div class="code-block"><div class="code-header"><span class="code-lang">Kotlin</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre><span class="cm">// StateFlow — hot flow, always has a value (replaces LiveData)</span>
<span class="kw">private val</span> _uiState = <span class="cls">MutableStateFlow</span>&lt;<span class="cls">UiState</span>&gt;(<span class="cls">UiState</span>.<span class="cls">Loading</span>)
<span class="kw">val</span> uiState: <span class="cls">StateFlow</span>&lt;<span class="cls">UiState</span>&gt; = _uiState.<span class="fn">asStateFlow</span>()

<span class="cm">// SharedFlow — hot flow, for one-time events (snackbar, navigation)</span>
<span class="kw">private val</span> _events = <span class="cls">MutableSharedFlow</span>&lt;<span class="cls">UiEvent</span>&gt;()
<span class="kw">val</span> events: <span class="cls">SharedFlow</span>&lt;<span class="cls">UiEvent</span>&gt; = _events.<span class="fn">asSharedFlow</span>()

<span class="kw">fun</span> <span class="fn">showSnackbar</span>(msg: <span class="cls">String</span>) {
    viewModelScope.<span class="fn">launch</span> { _events.<span class="fn">emit</span>(<span class="cls">UiEvent</span>.<span class="cls">ShowSnackbar</span>(msg)) }
}</pre></div>
    `
  },
  {
    id: "null-safety",
    label: "Null Safety",
    icon: "fas fa-shield-alt",
    title: "Null Safety",
    content: `
      <h3>Null Safety — No More NPEs</h3>
      <p>Kotlin's type system distinguishes nullable (<code>T?</code>) from non-nullable (<code>T</code>) types at compile time. The compiler forces you to handle nulls explicitly, eliminating the most common Android crash.</p>
      <h4>Nullable vs Non-Nullable</h4>
      <div class="code-block"><div class="code-header"><span class="code-lang">Kotlin</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre><span class="cm">// Non-nullable — compiler guarantees never null</span>
<span class="kw">var</span> name: <span class="cls">String</span> = <span class="str">"Alice"</span>
<span class="cm">// name = null  ← compile error!</span>

<span class="cm">// Nullable — must handle null explicitly</span>
<span class="kw">var</span> email: <span class="cls">String</span>? = <span class="kw">null</span>
<span class="kw">var</span> age:   <span class="cls">Int</span>?    = <span class="kw">null</span>

<span class="cm">// Cannot call methods directly on nullable</span>
<span class="cm">// email.length  ← compile error!</span></pre></div>
      <h4>Safe Call <code>?.</code> &amp; Elvis <code>?:</code></h4>
      <div class="code-block"><div class="code-header"><span class="code-lang">Kotlin</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre><span class="kw">val</span> email: <span class="cls">String</span>? = <span class="kw">null</span>

<span class="cm">// ?. — safe call: returns null if receiver is null</span>
<span class="kw">val</span> len     = email?.<span class="fn">length</span>          <span class="cm">// null</span>
<span class="kw">val</span> upper   = email?.<span class="fn">uppercase</span>()    <span class="cm">// null</span>

<span class="cm">// ?: — Elvis: use right side if left is null</span>
<span class="kw">val</span> display = email ?: <span class="str">"No email"</span>   <span class="cm">// "No email"</span>
<span class="kw">val</span> length  = email?.<span class="fn">length</span> ?: <span class="num">0</span>   <span class="cm">// 0</span>

<span class="cm">// Chain them</span>
<span class="kw">val</span> city = user?.address?.city ?: <span class="str">"Unknown"</span>

<span class="cm">// Elvis with throw</span>
<span class="kw">val</span> token = prefs.<span class="fn">getToken</span>() ?: <span class="kw">throw</span> <span class="cls">IllegalStateException</span>(<span class="str">"Not logged in"</span>)</pre></div>
      <h4>Smart Casts &amp; <code>let</code></h4>
      <div class="code-block"><div class="code-header"><span class="code-lang">Kotlin</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre><span class="kw">var</span> input: <span class="cls">String</span>? = <span class="fn">getUserInput</span>()

<span class="cm">// Smart cast — after null check, type is String</span>
<span class="kw">if</span> (input != <span class="kw">null</span>) {
    println(input.<span class="fn">length</span>)   <span class="cm">// String, not String?</span>
    println(input.<span class="fn">uppercase</span>())
}

<span class="cm">// let — run block only if non-null</span>
input?.<span class="fn">let</span> { value ->
    println(<span class="str">"Got: <span class="ann">\$value</span>"</span>)
    <span class="fn">processInput</span>(value)
}

<span class="cm">// also works with multiple nullables</span>
<span class="kw">val</span> a: <span class="cls">String</span>? = <span class="str">"hello"</span>
<span class="kw">val</span> b: <span class="cls">Int</span>?    = <span class="num">42</span>
<span class="kw">if</span> (a != <span class="kw">null</span> && b != <span class="kw">null</span>) {
    println(<span class="str">"<span class="ann">\$a</span> repeated <span class="ann">\$b</span> times"</span>)
}</pre></div>
      <h4>Not-Null Assertion <code>!!</code> &amp; Safe Cast <code>as?</code></h4>
      <div class="code-block"><div class="code-header"><span class="code-lang">Kotlin</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre><span class="cm">// !! — throws NullPointerException if null (use sparingly!)</span>
<span class="kw">val</span> len = email!!.<span class="fn">length</span>   <span class="cm">// KotlinNullPointerException if null</span>

<span class="cm">// as? — safe cast, returns null instead of ClassCastException</span>
<span class="kw">val</span> obj: <span class="cls">Any</span> = <span class="str">"Hello"</span>
<span class="kw">val</span> str: <span class="cls">String</span>? = obj <span class="kw">as</span>? <span class="cls">String</span>   <span class="cm">// "Hello"</span>
<span class="kw">val</span> num: <span class="cls">Int</span>?    = obj <span class="kw">as</span>? <span class="cls">Int</span>      <span class="cm">// null</span>

<span class="cm">// requireNotNull / checkNotNull</span>
<span class="kw">fun</span> <span class="fn">process</span>(value: <span class="cls">String</span>?) {
    <span class="kw">val</span> v = <span class="fn">requireNotNull</span>(value) { <span class="str">"value must not be null"</span> }
    println(v.<span class="fn">uppercase</span>())
}</pre></div>
      <div class="kt-callout" style="border-left:3px solid #ef4444;background:#ef444418;padding:10px 14px;border-radius:0 8px 8px 0;margin:12px 0;font-size:0.85rem;display:flex;gap:10px;align-items:flex-start"><i class="fas fa-exclamation-triangle" style="color:#ef4444;margin-top:2px;flex-shrink:0"></i><span>Avoid <code>!!</code> in production code. It defeats the purpose of null safety. Use <code>?.</code>, <code>?:</code>, or <code>let</code> instead. Reserve <code>!!</code> only for cases where you are 100% certain the value is non-null and can prove it.</span></div>
    `
  },
  {
    id: "scope-functions",
    label: "Scope Functions",
    icon: "fas fa-object-group",
    title: "Scope Functions",
    content: `
      <h3>Scope Functions</h3>
      <p>Kotlin's 5 scope functions — <code>let</code>, <code>run</code>, <code>with</code>, <code>apply</code>, <code>also</code> — execute a block within the context of an object. They differ in how they refer to the object (<code>it</code> vs <code>this</code>) and what they return.</p>
      <div style="overflow-x:auto;margin:14px 0">
        <table style="width:100%;border-collapse:collapse;font-size:0.8rem">
          <thead><tr style="background:var(--primary);color:#fff">
            <th style="padding:8px 12px;text-align:left">Function</th>
            <th style="padding:8px 12px;text-align:left">Object ref</th>
            <th style="padding:8px 12px;text-align:left">Returns</th>
            <th style="padding:8px 12px;text-align:left">Best for</th>
          </tr></thead>
          <tbody>
            <tr style="border-bottom:1px solid var(--border)"><td style="padding:8px 12px"><code>let</code></td><td style="padding:8px 12px"><code>it</code></td><td style="padding:8px 12px">Lambda result</td><td style="padding:8px 12px">Null checks, transform</td></tr>
            <tr style="border-bottom:1px solid var(--border);background:var(--card-bg)"><td style="padding:8px 12px"><code>run</code></td><td style="padding:8px 12px"><code>this</code></td><td style="padding:8px 12px">Lambda result</td><td style="padding:8px 12px">Init + compute result</td></tr>
            <tr style="border-bottom:1px solid var(--border)"><td style="padding:8px 12px"><code>with</code></td><td style="padding:8px 12px"><code>this</code></td><td style="padding:8px 12px">Lambda result</td><td style="padding:8px 12px">Group calls on object</td></tr>
            <tr style="border-bottom:1px solid var(--border);background:var(--card-bg)"><td style="padding:8px 12px"><code>apply</code></td><td style="padding:8px 12px"><code>this</code></td><td style="padding:8px 12px">The object</td><td style="padding:8px 12px">Configure / build object</td></tr>
            <tr><td style="padding:8px 12px"><code>also</code></td><td style="padding:8px 12px"><code>it</code></td><td style="padding:8px 12px">The object</td><td style="padding:8px 12px">Side effects, logging</td></tr>
          </tbody>
        </table>
      </div>
      <h4>apply — configure an object</h4>
      <div class="code-block"><div class="code-header"><span class="code-lang">Kotlin</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre><span class="cm">// apply: 'this' = object, returns the object</span>
<span class="kw">val</span> intent = <span class="cls">Intent</span>(<span class="kw">this</span>, <span class="cls">DetailActivity</span>::<span class="kw">class</span>.java).<span class="fn">apply</span> {
    <span class="fn">putExtra</span>(<span class="str">"id"</span>, <span class="num">42</span>)
    <span class="fn">putExtra</span>(<span class="str">"title"</span>, <span class="str">"Hello"</span>)
    <span class="fn">addFlags</span>(<span class="cls">Intent</span>.<span class="cls">FLAG_ACTIVITY_CLEAR_TOP</span>)
}
<span class="fn">startActivity</span>(intent)

<span class="cm">// Also great for building data objects</span>
<span class="kw">val</span> user = <span class="cls">User</span>().<span class="fn">apply</span> {
    name  = <span class="str">"Alice"</span>
    email = <span class="str">"alice@example.com"</span>
    age   = <span class="num">28</span>
}</pre></div>
      <h4>let — null-safe transform</h4>
      <div class="code-block"><div class="code-header"><span class="code-lang">Kotlin</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre><span class="cm">// let: 'it' = object, returns lambda result</span>
<span class="kw">val</span> name: <span class="cls">String</span>? = <span class="fn">getUserName</span>()

<span class="cm">// Only runs if name is non-null</span>
name?.<span class="fn">let</span> {
    println(<span class="str">"Hello, <span class="ann">\$it</span>!"</span>)
    <span class="fn">updateUI</span>(it)
}

<span class="cm">// Transform and assign</span>
<span class="kw">val</span> upper = name?.<span class="fn">let</span> { it.<span class="fn">uppercase</span>() } ?: <span class="str">"UNKNOWN"</span></pre></div>
      <h4>run, with &amp; also</h4>
      <div class="code-block"><div class="code-header"><span class="code-lang">Kotlin</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre><span class="cm">// run: 'this' = object, returns lambda result</span>
<span class="kw">val</span> summary = user.<span class="fn">run</span> {
    <span class="str">"<span class="ann">\$name</span> (<span class="ann">\$age</span>) — <span class="ann">\$email</span>"</span>
}

<span class="cm">// with: non-extension, 'this' = object, returns lambda result</span>
<span class="kw">val</span> html = <span class="fn">with</span>(StringBuilder()) {
    <span class="fn">append</span>(<span class="str">"&lt;h1&gt;"</span>)
    <span class="fn">append</span>(user.name)
    <span class="fn">append</span>(<span class="str">"&lt;/h1&gt;"</span>)
    <span class="fn">toString</span>()
}

<span class="cm">// also: 'it' = object, returns the object (for side effects)</span>
<span class="kw">val</span> list = <span class="fn">mutableListOf</span>(<span class="str">"a"</span>, <span class="str">"b"</span>)
    .<span class="fn">also</span> { println(<span class="str">"Created list: <span class="ann">\$it</span>"</span>) }
    .<span class="fn">also</span> { it.<span class="fn">add</span>(<span class="str">"c"</span>) }

<span class="cm">// Chaining scope functions</span>
<span class="kw">val</span> result = <span class="fn">fetchUser</span>()
    ?.<span class="fn">also</span> { <span class="fn">log</span>(<span class="str">"Fetched: <span class="ann">\$it</span>"</span>) }
    ?.<span class="fn">let</span>  { <span class="fn">transform</span>(it) }
    ?: <span class="fn">defaultUser</span>()</pre></div>
    `
  },
  {
    id: "generics",
    label: "Generics",
    icon: "fas fa-code-branch",
    title: "Generics & Type System",
    content: `
      <h3>Generics &amp; the Type System</h3>
      <p>Generics let you write type-safe, reusable code. Kotlin adds declaration-site variance (<code>in</code>/<code>out</code>), type projections, and <code>reified</code> type parameters — features Java generics lack.</p>
      <h4>Generic Classes &amp; Functions</h4>
      <div class="code-block"><div class="code-header"><span class="code-lang">Kotlin</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre><span class="cm">// Generic class</span>
<span class="kw">class</span> <span class="cls">Box</span>&lt;T&gt;(<span class="kw">var</span> value: T) {
    <span class="kw">fun</span> <span class="fn">get</span>(): T = value
    <span class="kw">fun</span> <span class="fn">set</span>(v: T) { value = v }
    <span class="kw">override fun</span> <span class="fn">toString</span>() = <span class="str">"Box(<span class="ann">\$value</span>)"</span>
}

<span class="kw">val</span> intBox = <span class="cls">Box</span>(<span class="num">42</span>)
<span class="kw">val</span> strBox = <span class="cls">Box</span>(<span class="str">"Hello"</span>)
println(intBox)  <span class="cm">// Box(42)</span>

<span class="cm">// Generic function with upper bound</span>
<span class="kw">fun</span> &lt;T : <span class="cls">Comparable</span>&lt;T&gt;&gt; <span class="fn">clamp</span>(value: T, min: T, max: T): T =
    <span class="kw">when</span> {
        value < min -> min
        value > max -> max
        <span class="kw">else</span>        -> value
    }

println(<span class="fn">clamp</span>(<span class="num">15</span>, <span class="num">0</span>, <span class="num">10</span>))    <span class="cm">// 10</span>
println(<span class="fn">clamp</span>(<span class="num">5</span>, <span class="num">0</span>, <span class="num">10</span>))     <span class="cm">// 5</span>
println(<span class="fn">clamp</span>(<span class="str">"z"</span>, <span class="str">"a"</span>, <span class="str">"m"</span>)) <span class="cm">// m</span></pre></div>
      <h4>Variance — <code>out</code> (Covariant) &amp; <code>in</code> (Contravariant)</h4>
      <div class="code-block"><div class="code-header"><span class="code-lang">Kotlin</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre><span class="cm">// out T — Producer: can only return T (covariant)</span>
<span class="cm">// List&lt;Dog&gt; is a subtype of List&lt;Animal&gt;</span>
<span class="kw">interface</span> <span class="cls">Producer</span>&lt;<span class="kw">out</span> T&gt; {
    <span class="kw">fun</span> <span class="fn">produce</span>(): T
}

<span class="cm">// in T — Consumer: can only accept T (contravariant)</span>
<span class="cm">// Comparator&lt;Animal&gt; can be used as Comparator&lt;Dog&gt;</span>
<span class="kw">interface</span> <span class="cls">Consumer</span>&lt;<span class="kw">in</span> T&gt; {
    <span class="kw">fun</span> <span class="fn">consume</span>(item: T)
}

<span class="cm">// Real example: Kotlin's List is covariant (out T)</span>
<span class="kw">val</span> dogs: <span class="cls">List</span>&lt;<span class="cls">Dog</span>&gt; = <span class="fn">listOf</span>(<span class="cls">Dog</span>())
<span class="kw">val</span> animals: <span class="cls">List</span>&lt;<span class="cls">Animal</span>&gt; = dogs  <span class="cm">// ✓ works because List is covariant</span>

<span class="cm">// Use-site variance (type projection)</span>
<span class="kw">fun</span> <span class="fn">copy</span>(from: <span class="cls">Array</span>&lt;<span class="kw">out</span> <span class="cls">Any</span>&gt;, to: <span class="cls">Array</span>&lt;<span class="cls">Any</span>&gt;) {
    from.<span class="fn">forEachIndexed</span> { i, v -> to[i] = v }
}</pre></div>
      <h4>Reified Type Parameters</h4>
      <p>Normally, generic type info is erased at runtime. <code>reified</code> + <code>inline</code> preserves it.</p>
      <div class="code-block"><div class="code-header"><span class="code-lang">Kotlin</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre><span class="cm">// Without reified — can't check T at runtime</span>
<span class="cm">// fun &lt;T&gt; isType(v: Any) = v is T  ← compile error</span>

<span class="cm">// With reified — T is available at runtime</span>
<span class="kw">inline fun</span> &lt;<span class="kw">reified</span> T&gt; <span class="fn">isType</span>(value: <span class="cls">Any</span>) = value <span class="kw">is</span> T
<span class="kw">inline fun</span> &lt;<span class="kw">reified</span> T&gt; <span class="cls">Any</span>.<span class="fn">castOrNull</span>() = <span class="kw">this</span> <span class="kw">as</span>? T

println(<span class="fn">isType</span>&lt;<span class="cls">String</span>&gt;(<span class="str">"hello"</span>))  <span class="cm">// true</span>
println(<span class="fn">isType</span>&lt;<span class="cls">Int</span>&gt;(<span class="str">"hello"</span>))     <span class="cm">// false</span>

<span class="cm">// Practical: start Activity without Class reference</span>
<span class="kw">inline fun</span> &lt;<span class="kw">reified</span> T : <span class="cls">Activity</span>&gt; <span class="cls">Context</span>.<span class="fn">startActivity</span>() {
    <span class="fn">startActivity</span>(<span class="cls">Intent</span>(<span class="kw">this</span>, T::<span class="kw">class</span>.java))
}
<span class="cm">// Usage:</span>
<span class="fn">startActivity</span>&lt;<span class="cls">DetailActivity</span>&gt;()  <span class="cm">// clean!</span>

<span class="cm">// Practical: Gson deserialization</span>
<span class="kw">inline fun</span> &lt;<span class="kw">reified</span> T&gt; <span class="fn">fromJson</span>(json: <span class="cls">String</span>): T =
    <span class="cls">Gson</span>().<span class="fn">fromJson</span>(json, T::<span class="kw">class</span>.java)</pre></div>
    `
  }
];


// ===== ANDROID EXAMPLES DATA =====
const androidExamples = [
  {
    id: 1,
    title: "Hello World App",
    desc: "Your first Android app with a TextView and basic layout setup.",
    icon: "fas fa-mobile-alt",
    color: "#6c63ff",
    category: "Beginner",
    tags: ["Activity", "XML", "TextView"],
    difficulty: "Beginner",
    time: "15 min",
    steps: [
      { title: "Create New Project", body: "Open Android Studio → New Project → Empty Activity. Set name to 'HelloWorld', package to 'com.example.helloworld', language Kotlin, min SDK 24." },
      { title: "Edit activity_main.xml", body: "Replace the default layout with a ConstraintLayout containing a centered TextView.", code: `&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;androidx.constraintlayout.widget.ConstraintLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"&gt;

    &lt;TextView
        android:id="@+id/tvHello"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Hello, Android!"
        android:textSize="28sp"
        android:textStyle="bold"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" /&gt;

&lt;/androidx.constraintlayout.widget.ConstraintLayout&gt;` },
      { title: "MainActivity.kt", body: "The activity is auto-generated. You can update the text programmatically:", code: `class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        val tvHello = findViewById&lt;TextView&gt;(R.id.tvHello)
        tvHello.text = "Hello, Kotlin World!"
    }
}` },
      { title: "Run the App", body: "Click the green Run button or press Shift+F10. Select your emulator or connected device. You should see 'Hello, Kotlin World!' centered on screen.", output: `<div style="display:flex;align-items:center;justify-content:center;height:220px;background:#f5f5f5"><span style="font-size:1.3rem;font-weight:700;color:#333">Hello, Kotlin World!</span></div>` }
    ]
  },
  {
    id: 2,
    title: "Button Click Counter",
    desc: "Interactive counter app demonstrating click listeners and state management.",
    icon: "fas fa-hand-pointer",
    color: "#06b6d4",
    category: "Beginner",
    tags: ["Button", "State", "ViewBinding"],
    difficulty: "Beginner",
    time: "20 min",
    steps: [
      { title: "Enable ViewBinding", body: "In build.gradle (app level), add inside android block:", code: `buildFeatures {
    viewBinding = true
}` },
      { title: "Design the Layout", body: "Create activity_main.xml with a counter display and buttons:", code: `&lt;LinearLayout
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:gravity="center"
    android:padding="24dp"&gt;

    &lt;TextView
        android:id="@+id/tvCount"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="0"
        android:textSize="72sp"
        android:textStyle="bold" /&gt;

    &lt;Button
        android:id="@+id/btnIncrement"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="+ Increment" /&gt;

    &lt;Button
        android:id="@+id/btnReset"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Reset" /&gt;
&lt;/LinearLayout&gt;` },
      { title: "MainActivity.kt with ViewBinding", body: "Use ViewBinding to access views safely:", code: `class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding
    private var count = 0

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.btnIncrement.setOnClickListener {
            count++
            binding.tvCount.text = count.toString()
        }

        binding.btnReset.setOnClickListener {
            count = 0
            binding.tvCount.text = "0"
        }
    }
}`, output: `<div style="padding:16px;background:#fff;display:flex;flex-direction:column;align-items:center;gap:12px"><div style="font-size:2.5rem;font-weight:900;color:#6c63ff">3</div><div style="display:flex;gap:8px"><div style="background:#6c63ff;color:#fff;padding:8px 18px;border-radius:8px;font-size:0.65rem;font-weight:700">+ Increment</div><div style="background:#eee;color:#555;padding:8px 18px;border-radius:8px;font-size:0.65rem;font-weight:700">Reset</div></div><div style="font-size:0.6rem;color:#999;margin-top:4px">Tapped 3 times</div></div>` }
    ]
  },
  {
    id: 16,
    title: "RecyclerView List",
    desc: "Display a scrollable list of items using RecyclerView with a custom adapter.",
    icon: "fas fa-list-ul",
    color: "#22c55e",
    category: "Intermediate",
    tags: ["RecyclerView", "Adapter", "ViewHolder"],
    difficulty: "Intermediate",
    time: "45 min",
    steps: [
      { title: "Add RecyclerView dependency", body: "In build.gradle (app):", code: `implementation "androidx.recyclerview:recyclerview:1.3.2"` },
      { title: "Create item layout (item_fruit.xml)", body: "Design each list item:", code: `&lt;LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:padding="16dp"
    android:orientation="horizontal"
    android:gravity="center_vertical"&gt;

    &lt;TextView
        android:id="@+id/tvEmoji"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:textSize="32sp"
        android:layout_marginEnd="16dp" /&gt;

    &lt;TextView
        android:id="@+id/tvName"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:textSize="18sp" /&gt;
&lt;/LinearLayout&gt;` },
      { title: "Create FruitAdapter.kt", body: "Build the adapter with ViewHolder pattern:", code: `data class Fruit(val name: String, val emoji: String)

class FruitAdapter(private val fruits: List&lt;Fruit&gt;) :
    RecyclerView.Adapter&lt;FruitAdapter.FruitViewHolder&gt;() {

    inner class FruitViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        val tvEmoji: TextView = view.findViewById(R.id.tvEmoji)
        val tvName: TextView = view.findViewById(R.id.tvName)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): FruitViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.item_fruit, parent, false)
        return FruitViewHolder(view)
    }

    override fun onBindViewHolder(holder: FruitViewHolder, position: Int) {
        val fruit = fruits[position]
        holder.tvEmoji.text = fruit.emoji
        holder.tvName.text = fruit.name
    }

    override fun getItemCount() = fruits.size
}` },
      { title: "Setup in MainActivity.kt", body: "Wire up the RecyclerView:", code: `class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val fruits = listOf(
            Fruit("Apple", "🍎"), Fruit("Banana", "🍌"),
            Fruit("Cherry", "🍒"), Fruit("Mango", "🥭"),
            Fruit("Orange", "🍊"), Fruit("Grape", "🍇")
        )

        val recyclerView = findViewById&lt;RecyclerView&gt;(R.id.recyclerView)
        recyclerView.layoutManager = LinearLayoutManager(this)
        recyclerView.adapter = FruitAdapter(fruits)
    }
}`, output: `<div style="padding:8px;background:#fff"><div style="font-size:0.6rem;font-weight:700;color:#888;margin-bottom:6px;padding:0 4px">Fruits</div><div style="display:flex;flex-direction:column;gap:1px"><div style="display:flex;align-items:center;gap:8px;padding:8px;border-bottom:1px solid #f0f0f0"><span style="font-size:1rem">🍎</span><span style="font-size:0.65rem;color:#333">Apple</span></div><div style="display:flex;align-items:center;gap:8px;padding:8px;border-bottom:1px solid #f0f0f0"><span style="font-size:1rem">🍌</span><span style="font-size:0.65rem;color:#333">Banana</span></div><div style="display:flex;align-items:center;gap:8px;padding:8px;border-bottom:1px solid #f0f0f0"><span style="font-size:1rem">🍒</span><span style="font-size:0.65rem;color:#333">Cherry</span></div><div style="display:flex;align-items:center;gap:8px;padding:8px;border-bottom:1px solid #f0f0f0"><span style="font-size:1rem">🥭</span><span style="font-size:0.65rem;color:#333">Mango</span></div><div style="display:flex;align-items:center;gap:8px;padding:8px"><span style="font-size:1rem">🍊</span><span style="font-size:0.65rem;color:#333">Orange</span></div></div></div>` }
    ]
  },
  {
    id: 22,
    title: "Navigation Component",
    desc: "Multi-screen navigation using Jetpack Navigation Component with a NavGraph.",
    icon: "fas fa-compass",
    color: "#f59e0b",
    category: "Intermediate",
    tags: ["Navigation", "Fragment", "NavGraph"],
    difficulty: "Intermediate",
    time: "60 min",
    steps: [
      { title: "Add Navigation dependencies", body: "In build.gradle (app):", code: `implementation "androidx.navigation:navigation-fragment-ktx:2.7.6"
implementation "androidx.navigation:navigation-ui-ktx:2.7.6"` },
      { title: "Create NavGraph (res/navigation/nav_graph.xml)", body: "Define your navigation graph:", code: `&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;navigation xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:id="@+id/nav_graph"
    app:startDestination="@id/homeFragment"&gt;

    &lt;fragment android:id="@+id/homeFragment"
        android:name="com.example.HomeFragment"
        android:label="Home"&gt;
        &lt;action android:id="@+id/action_home_to_detail"
            app:destination="@id/detailFragment" /&gt;
    &lt;/fragment&gt;

    &lt;fragment android:id="@+id/detailFragment"
        android:name="com.example.DetailFragment"
        android:label="Detail"&gt;
        &lt;argument android:name="itemId" app:argType="integer" /&gt;
    &lt;/fragment&gt;
&lt;/navigation&gt;` },
      { title: "HomeFragment.kt", body: "Navigate to detail with arguments:", code: `class HomeFragment : Fragment(R.layout.fragment_home) {
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        view.findViewById&lt;Button&gt;(R.id.btnGoDetail).setOnClickListener {
            val action = HomeFragmentDirections
                .actionHomeToDetail(itemId = 42)
            findNavController().navigate(action)
        }
    }
}` },
      { title: "DetailFragment.kt", body: "Receive arguments using Safe Args:", code: `class DetailFragment : Fragment(R.layout.fragment_detail) {
    private val args: DetailFragmentArgs by navArgs()

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        val id = args.itemId
        view.findViewById&lt;TextView&gt;(R.id.tvId).text = "Item ID: ${'$'}id"
    }
}` }
    ]
  },
  {
    id: 23,
    title: "ViewModel & LiveData",
    desc: "MVVM architecture with ViewModel and LiveData for lifecycle-aware UI updates.",
    icon: "fas fa-layer-group",
    color: "#8b5cf6",
    category: "Intermediate",
    tags: ["ViewModel", "LiveData", "MVVM"],
    difficulty: "Intermediate",
    time: "50 min",
    steps: [
      { title: "Add ViewModel dependency", body: "In build.gradle:", code: `implementation "androidx.lifecycle:lifecycle-viewmodel-ktx:2.7.0"
implementation "androidx.lifecycle:lifecycle-livedata-ktx:2.7.0"` },
      { title: "Create CounterViewModel.kt", body: "ViewModel holds and manages UI-related data:", code: `class CounterViewModel : ViewModel() {
    private val _count = MutableLiveData(0)
    val count: LiveData&lt;Int&gt; = _count

    fun increment() {
        _count.value = (_count.value ?: 0) + 1
    }

    fun decrement() {
        _count.value = (_count.value ?: 0) - 1
    }

    fun reset() {
        _count.value = 0
    }
}` },
      { title: "Observe in MainActivity.kt", body: "Observe LiveData and update UI reactively:", code: `class MainActivity : AppCompatActivity() {
    private val viewModel: CounterViewModel by viewModels()
    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        // Observe LiveData
        viewModel.count.observe(this) { count ->
            binding.tvCount.text = count.toString()
        }

        binding.btnPlus.setOnClickListener { viewModel.increment() }
        binding.btnMinus.setOnClickListener { viewModel.decrement() }
        binding.btnReset.setOnClickListener { viewModel.reset() }
    }
}`, output: `<div style="padding:12px;background:#fff;display:flex;flex-direction:column;gap:10px"><div style="display:flex;align-items:center;justify-content:space-between"><span style="font-size:0.6rem;color:#888">Counter App</span></div><div style="font-size:2rem;font-weight:900;color:#6c63ff;text-align:center;padding:8px 0">1</div><div style="display:flex;gap:6px;justify-content:center"><div style="background:#6c63ff;color:#fff;padding:6px 14px;border-radius:8px;font-size:0.6rem;font-weight:700">+</div><div style="background:#ef4444;color:#fff;padding:6px 14px;border-radius:8px;font-size:0.6rem;font-weight:700">−</div><div style="background:#eee;color:#555;padding:6px 14px;border-radius:8px;font-size:0.6rem;font-weight:700">Reset</div></div><div style="font-size:0.55rem;color:#22c55e;text-align:center;background:#f0fdf4;padding:4px;border-radius:4px">✓ Survives screen rotation</div></div>` }
    ]
  },
  {
    id: 24,
    title: "Retrofit API Call",
    desc: "Fetch data from a REST API using Retrofit with Coroutines and display in RecyclerView.",
    icon: "fas fa-wifi",
    color: "#ef4444",
    category: "Advanced",
    tags: ["Retrofit", "API", "Coroutines"],
    difficulty: "Advanced",
    time: "90 min",
    steps: [
      { title: "Add dependencies", body: "In build.gradle:", code: `implementation "com.squareup.retrofit2:retrofit:2.9.0"
implementation "com.squareup.retrofit2:converter-gson:2.9.0"
implementation "org.jetbrains.kotlinx:kotlinx-coroutines-android:1.7.3"` },
      { title: "Create data model & API interface", body: "Define your data class and Retrofit interface:", code: `data class Post(val id: Int, val title: String, val body: String)

interface ApiService {
    @GET("posts")
    suspend fun getPosts(): List&lt;Post&gt;
}

object RetrofitClient {
    val api: ApiService by lazy {
        Retrofit.Builder()
            .baseUrl("https://jsonplaceholder.typicode.com/")
            .addConverterFactory(GsonConverterFactory.create())
            .build()
            .create(ApiService::class.java)
    }
}` },
      { title: "Create PostsViewModel.kt", body: "Fetch data using coroutines:", code: `class PostsViewModel : ViewModel() {
    private val _posts = MutableLiveData&lt;List&lt;Post&gt;&gt;()
    val posts: LiveData&lt;List&lt;Post&gt;&gt; = _posts

    private val _loading = MutableLiveData(false)
    val loading: LiveData&lt;Boolean&gt; = _loading

    fun fetchPosts() {
        viewModelScope.launch {
            _loading.value = true
            try {
                val result = RetrofitClient.api.getPosts()
                _posts.value = result
            } catch (e: Exception) {
                // handle error
            } finally {
                _loading.value = false
            }
        }
    }
}` },
      { title: "Observe and display", body: "In your Activity/Fragment:", code: `viewModel.posts.observe(this) { posts ->
    adapter.submitList(posts)
}
viewModel.loading.observe(this) { isLoading ->
    binding.progressBar.isVisible = isLoading
}
viewModel.fetchPosts()`, output: `<div style="padding:8px;background:#fff"><div style="display:flex;align-items:center;gap:6px;margin-bottom:8px"><div style="width:8px;height:8px;border-radius:50%;background:#6c63ff;animation:pulse 1s infinite"></div><span style="font-size:0.6rem;color:#888">Loading posts...</span></div><div style="display:flex;flex-direction:column;gap:6px"><div style="background:#f8f8ff;border-left:3px solid #6c63ff;padding:6px 8px;border-radius:0 6px 6px 0"><div style="font-size:0.6rem;font-weight:700;color:#333">sunt aut facere repellat...</div><div style="font-size:0.55rem;color:#888;margin-top:2px">Post #1</div></div><div style="background:#f8f8ff;border-left:3px solid #06b6d4;padding:6px 8px;border-radius:0 6px 6px 0"><div style="font-size:0.6rem;font-weight:700;color:#333">qui est esse</div><div style="font-size:0.55rem;color:#888;margin-top:2px">Post #2</div></div><div style="background:#f8f8ff;border-left:3px solid #22c55e;padding:6px 8px;border-radius:0 6px 6px 0"><div style="font-size:0.6rem;font-weight:700;color:#333">ea molestias quasi...</div><div style="font-size:0.55rem;color:#888;margin-top:2px">Post #3</div></div><div style="font-size:0.55rem;color:#aaa;text-align:center;padding:4px">100 posts loaded from API</div></div></div>` }
    ]
  },
  {
    id: 27,
    title: "Room Database",
    desc: "Local data persistence using Room ORM with DAO, Entity, and Database classes.",
    icon: "fas fa-server",
    color: "#10b981",
    category: "Advanced",
    tags: ["Room", "Database", "DAO"],
    difficulty: "Advanced",
    time: "75 min",
    steps: [
      { title: "Add Room dependencies", body: "In build.gradle:", code: `implementation "androidx.room:room-runtime:2.6.1"
implementation "androidx.room:room-ktx:2.6.1"
kapt "androidx.room:room-compiler:2.6.1"` },
      { title: "Create Entity", body: "Define your database table:", code: `@Entity(tableName = "notes")
data class Note(
    @PrimaryKey(autoGenerate = true) val id: Int = 0,
    @ColumnInfo(name = "title") val title: String,
    @ColumnInfo(name = "content") val content: String,
    @ColumnInfo(name = "timestamp") val timestamp: Long = System.currentTimeMillis()
)` },
      { title: "Create DAO", body: "Define database operations:", code: `@Dao
interface NoteDao {
    @Query("SELECT * FROM notes ORDER BY timestamp DESC")
    fun getAllNotes(): Flow&lt;List&lt;Note&gt;&gt;

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insert(note: Note)

    @Delete
    suspend fun delete(note: Note)

    @Update
    suspend fun update(note: Note)
}` },
      { title: "Create Database & Repository", body: "Wire everything together:", code: `@Database(entities = [Note::class], version = 1)
abstract class AppDatabase : RoomDatabase() {
    abstract fun noteDao(): NoteDao

    companion object {
        @Volatile private var INSTANCE: AppDatabase? = null
        fun getInstance(context: Context) = INSTANCE ?: synchronized(this) {
            Room.databaseBuilder(context, AppDatabase::class.java, "notes_db")
                .build().also { INSTANCE = it }
        }
    }
}

class NoteRepository(private val dao: NoteDao) {
    val allNotes = dao.getAllNotes()
    suspend fun insert(note: Note) = dao.insert(note)
    suspend fun delete(note: Note) = dao.delete(note)
}`, output: `<div style="padding:10px;background:#fff"><div style="font-size:0.6rem;font-weight:700;color:#10b981;margin-bottom:8px">📋 Notes App</div><div style="display:flex;flex-direction:column;gap:6px"><div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:8px"><div style="font-size:0.62rem;font-weight:700;color:#333">Buy milk</div><div style="font-size:0.55rem;color:#666;margin-top:2px">2 litres</div><div style="font-size:0.5rem;color:#aaa;margin-top:4px">Just now</div></div><div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:8px"><div style="font-size:0.62rem;font-weight:700;color:#333">Meeting notes</div><div style="font-size:0.55rem;color:#666;margin-top:2px">Discuss Q2 roadmap</div><div style="font-size:0.5rem;color:#aaa;margin-top:4px">2 min ago</div></div></div><div style="margin-top:8px;background:#10b981;color:#fff;text-align:center;padding:6px;border-radius:8px;font-size:0.6rem;font-weight:700">+ Add Note</div></div>` }
    ]
  },
  {
    id: 30,
    title: "Jetpack Compose UI",
    desc: "Build a modern UI using Jetpack Compose — Android's declarative UI toolkit.",
    icon: "fas fa-paint-brush",
    color: "#f43f5e",
    category: "Advanced",
    tags: ["Compose", "Declarative", "Material3"],
    difficulty: "Advanced",
    time: "60 min",
    steps: [
      { title: "Create Compose Project", body: "In Android Studio, select 'Empty Activity' with Compose. Or add to existing project:", code: `implementation "androidx.compose.ui:ui:1.6.0"
implementation "androidx.compose.material3:material3:1.2.0"
implementation "androidx.activity:activity-compose:1.8.2"` },
      { title: "Build a Profile Card", body: "Create a composable function:", code: `@Composable
fun ProfileCard(name: String, role: String) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp),
        elevation = CardDefaults.cardElevation(8.dp)
    ) {
        Row(
            modifier = Modifier.padding(16.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Box(
                modifier = Modifier
                    .size(60.dp)
                    .clip(CircleShape)
                    .background(MaterialTheme.colorScheme.primary),
                contentAlignment = Alignment.Center
            ) {
                Text(name.first().toString(), color = Color.White, fontSize = 24.sp)
            }
            Spacer(modifier = Modifier.width(16.dp))
            Column {
                Text(name, style = MaterialTheme.typography.titleMedium)
                Text(role, style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant)
            }
        }
    }
}` },
      { title: "Use in MainActivity", body: "Set content with Compose:", code: `class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MyAppTheme {
                Surface(modifier = Modifier.fillMaxSize()) {
                    Column {
                        ProfileCard("Alice", "Android Developer")
                        ProfileCard("Bob", "UI Designer")
                    }
                }
            }
        }
    }
}` }
    ]
  },
  {
    id: 13,
    title: "SharedPreferences",
    desc: "Save and retrieve user preferences and settings using SharedPreferences.",
    icon: "fas fa-sliders-h",
    color: "#64748b",
    category: "Beginner",
    tags: ["SharedPreferences", "Storage", "Settings"],
    difficulty: "Beginner",
    time: "25 min",
    steps: [
      { title: "Create PrefsManager.kt", body: "Wrap SharedPreferences in a helper class:", code: `class PrefsManager(context: Context) {
    private val prefs = context.getSharedPreferences("app_prefs", Context.MODE_PRIVATE)

    var username: String
        get() = prefs.getString("username", "") ?: ""
        set(value) = prefs.edit().putString("username", value).apply()

    var isDarkMode: Boolean
        get() = prefs.getBoolean("dark_mode", false)
        set(value) = prefs.edit().putBoolean("dark_mode", value).apply()

    var loginCount: Int
        get() = prefs.getInt("login_count", 0)
        set(value) = prefs.edit().putInt("login_count", value).apply()

    fun clearAll() = prefs.edit().clear().apply()
}` },
      { title: "Use in Activity", body: "Read and write preferences:", code: `class MainActivity : AppCompatActivity() {
    private lateinit var prefs: PrefsManager

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        prefs = PrefsManager(this)
        prefs.loginCount++

        binding.etUsername.setText(prefs.username)
        binding.switchDark.isChecked = prefs.isDarkMode

        binding.btnSave.setOnClickListener {
            prefs.username = binding.etUsername.text.toString()
            Toast.makeText(this, "Saved!", Toast.LENGTH_SHORT).show()
        }
    }
}`, output: `<div style="padding:10px;background:#fff"><div style="font-size:0.6rem;font-weight:700;color:#8b5cf6;margin-bottom:8px">⚙️ Settings</div><div style="display:flex;flex-direction:column;gap:6px"><div style="background:#faf5ff;border-radius:8px;padding:8px"><div style="font-size:0.55rem;color:#888">Username</div><div style="font-size:0.65rem;font-weight:700;color:#333;margin-top:2px">Alice</div></div><div style="display:flex;align-items:center;justify-content:space-between;background:#faf5ff;border-radius:8px;padding:8px"><div><div style="font-size:0.55rem;color:#888">Dark Mode</div><div style="font-size:0.6rem;font-weight:700;color:#333">Enabled</div></div><div style="width:28px;height:16px;background:#8b5cf6;border-radius:8px;position:relative"><div style="width:12px;height:12px;background:#fff;border-radius:50%;position:absolute;right:2px;top:2px"></div></div></div><div style="background:#f0fdf4;border-radius:8px;padding:6px;text-align:center"><div style="font-size:0.55rem;color:#22c55e;font-weight:700">✓ Data persisted across app restarts</div></div></div></div>` }
    ]
  },
  {
    id: 17,
    title: "Permissions Handling",
    desc: "Request and handle runtime permissions properly for Android 6.0+.",
    icon: "fas fa-lock",
    color: "#f97316",
    category: "Intermediate",
    tags: ["Permissions", "Runtime", "ActivityResult"],
    difficulty: "Intermediate",
    time: "35 min",
    steps: [
      { title: "Declare in AndroidManifest.xml", body: "Add permission declarations:", code: `&lt;uses-permission android:name="android.permission.CAMERA" /&gt;
&lt;uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" /&gt;` },
      { title: "Request permission using ActivityResult API", body: "Modern way to request permissions:", code: `class MainActivity : AppCompatActivity() {
    private val requestPermission = registerForActivityResult(
        ActivityResultContracts.RequestPermission()
    ) { isGranted ->
        if (isGranted) {
            openCamera()
        } else {
            showPermissionDeniedMessage()
        }
    }

    private fun checkAndRequestCamera() {
        when {
            ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA)
                == PackageManager.PERMISSION_GRANTED -> openCamera()

            shouldShowRequestPermissionRationale(Manifest.permission.CAMERA) -> {
                showRationaleDialog()
            }

            else -> requestPermission.launch(Manifest.permission.CAMERA)
        }
    }

    private fun openCamera() {
        Toast.makeText(this, "Camera opened!", Toast.LENGTH_SHORT).show()
    }

    private fun showPermissionDeniedMessage() {
        Snackbar.make(binding.root, "Camera permission denied", Snackbar.LENGTH_LONG)
            .setAction("Settings") { openAppSettings() }
            .show()
    }
}` }
    ]
  }
];

// ===== MORE EXAMPLES (11-20) =====
const androidExamples2 = [
  {
    id: 18,
    title: "Notifications",
    desc: "Create and display local notifications with channels, actions, and custom styles.",
    icon: "fas fa-bell",
    color: "#eab308",
    category: "Intermediate",
    tags: ["Notifications", "NotificationChannel", "PendingIntent"],
    difficulty: "Intermediate",
    time: "40 min",
    steps: [
      { title: "Create Notification Channel", body: "Required for Android 8.0+:", code: `fun createNotificationChannel(context: Context) {
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
        val channel = NotificationChannel(
            "main_channel",
            "Main Notifications",
            NotificationManager.IMPORTANCE_DEFAULT
        ).apply {
            description = "App notifications"
            enableLights(true)
            lightColor = Color.BLUE
        }
        val manager = context.getSystemService(NotificationManager::class.java)
        manager.createNotificationChannel(channel)
    }
}` },
      { title: "Build and Show Notification", body: "Create a notification with action:", code: `fun showNotification(context: Context) {
    val intent = Intent(context, MainActivity::class.java)
    val pendingIntent = PendingIntent.getActivity(
        context, 0, intent,
        PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
    )

    val notification = NotificationCompat.Builder(context, "main_channel")
        .setSmallIcon(R.drawable.ic_notification)
        .setContentTitle("New Message")
        .setContentText("You have a new message!")
        .setPriority(NotificationCompat.PRIORITY_DEFAULT)
        .setContentIntent(pendingIntent)
        .setAutoCancel(true)
        .addAction(R.drawable.ic_reply, "Reply", pendingIntent)
        .build()

    NotificationManagerCompat.from(context).notify(1001, notification)
}`, output: `<div style="background:#1a1a2e;padding:8px;border-radius:6px"><div style="background:#2a2a4a;border-radius:6px;padding:8px;display:flex;align-items:flex-start;gap:8px"><div style="width:28px;height:28px;background:#6c63ff;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:0.8rem;flex-shrink:0">🔔</div><div><div style="font-size:0.6rem;font-weight:700;color:#fff">My App · now</div><div style="font-size:0.62rem;font-weight:700;color:#eee;margin-top:2px">New Message</div><div style="font-size:0.55rem;color:#aaa;margin-top:1px">You have a new message!</div><div style="display:flex;gap:6px;margin-top:6px"><div style="background:#6c63ff;color:#fff;padding:3px 8px;border-radius:4px;font-size:0.5rem;font-weight:700">Reply</div><div style="background:#3a3a5c;color:#ccc;padding:3px 8px;border-radius:4px;font-size:0.5rem">Dismiss</div></div></div></div></div>` }
    ]
  },
  {
    id: 25,
    title: "WorkManager",
    desc: "Schedule background tasks that run reliably even when the app is closed.",
    icon: "fas fa-clock",
    color: "#06b6d4",
    category: "Advanced",
    tags: ["WorkManager", "Background", "Scheduling"],
    difficulty: "Advanced",
    time: "55 min",
    steps: [
      { title: "Add WorkManager dependency", body: "In build.gradle:", code: `implementation "androidx.work:work-runtime-ktx:2.9.0"` },
      { title: "Create a Worker", body: "Define the background work:", code: `class SyncWorker(context: Context, params: WorkerParameters) :
    CoroutineWorker(context, params) {

    override suspend fun doWork(): Result {
        return try {
            // Perform background sync
            val data = inputData.getString("key") ?: ""
            performSync(data)
            Result.success()
        } catch (e: Exception) {
            if (runAttemptCount < 3) Result.retry()
            else Result.failure()
        }
    }

    private suspend fun performSync(data: String) {
        delay(2000) // simulate work
        Log.d("SyncWorker", "Synced: ${'$'}data")
    }
}` },
      { title: "Schedule the Work", body: "Enqueue work with constraints:", code: `val constraints = Constraints.Builder()
    .setRequiredNetworkType(NetworkType.CONNECTED)
    .setRequiresBatteryNotLow(true)
    .build()

val syncRequest = PeriodicWorkRequestBuilder&lt;SyncWorker&gt;(1, TimeUnit.HOURS)
    .setConstraints(constraints)
    .setInputData(workDataOf("key" to "value"))
    .build()

WorkManager.getInstance(context).enqueueUniquePeriodicWork(
    "sync_work",
    ExistingPeriodicWorkPolicy.KEEP,
    syncRequest
)`, output: `<div style="padding:10px;background:#fff"><div style="font-size:0.6rem;font-weight:700;color:#f59e0b;margin-bottom:8px">⏰ WorkManager Status</div><div style="display:flex;flex-direction:column;gap:6px"><div style="background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:8px"><div style="font-size:0.55rem;color:#888">Task Name</div><div style="font-size:0.62rem;font-weight:700;color:#333">sync_work</div></div><div style="display:flex;gap:4px"><div style="flex:1;background:#f0fdf4;border-radius:6px;padding:6px;text-align:center"><div style="font-size:0.5rem;color:#888">Status</div><div style="font-size:0.6rem;font-weight:700;color:#22c55e">RUNNING</div></div><div style="flex:1;background:#eff6ff;border-radius:6px;padding:6px;text-align:center"><div style="font-size:0.5rem;color:#888">Interval</div><div style="font-size:0.6rem;font-weight:700;color:#3b82f6">1 hour</div></div></div><div style="background:#f0fdf4;border-radius:6px;padding:6px;font-size:0.55rem;color:#22c55e;font-weight:700">✓ Synced successfully</div></div></div>` }
    ]
  },
  {
    id: 26,
    title: "Hilt Dependency Injection",
    desc: "Simplify dependency injection in Android using Hilt, built on top of Dagger.",
    icon: "fas fa-syringe",
    color: "#a855f7",
    category: "Advanced",
    tags: ["Hilt", "DI", "Dagger"],
    difficulty: "Advanced",
    time: "80 min",
    steps: [
      { title: "Setup Hilt", body: "In project build.gradle and app build.gradle:", code: `// project build.gradle
classpath "com.google.dagger:hilt-android-gradle-plugin:2.50"

// app build.gradle
apply plugin: 'com.google.dagger.hilt.android'
implementation "com.google.dagger:hilt-android:2.50"
kapt "com.google.dagger:hilt-compiler:2.50"` },
      { title: "Annotate Application class", body: "Required entry point:", code: `@HiltAndroidApp
class MyApp : Application()` },
      { title: "Create Module & Inject", body: "Provide dependencies via modules:", code: `@Module
@InstallIn(SingletonComponent::class)
object AppModule {
    @Provides
    @Singleton
    fun provideRetrofit(): Retrofit = Retrofit.Builder()
        .baseUrl("https://api.example.com/")
        .addConverterFactory(GsonConverterFactory.create())
        .build()

    @Provides
    @Singleton
    fun provideApiService(retrofit: Retrofit): ApiService =
        retrofit.create(ApiService::class.java)
}

@HiltViewModel
class MainViewModel @Inject constructor(
    private val api: ApiService
) : ViewModel() {
    fun fetchData() = viewModelScope.launch { api.getData() }
}

@AndroidEntryPoint
class MainActivity : AppCompatActivity() {
    private val viewModel: MainViewModel by viewModels()
}` }
    ]
  },
  {
    id: 21,
    title: "DataStore Preferences",
    desc: "Modern replacement for SharedPreferences using Jetpack DataStore with Flow.",
    icon: "fas fa-database",
    color: "#14b8a6",
    category: "Intermediate",
    tags: ["DataStore", "Flow", "Preferences"],
    difficulty: "Intermediate",
    time: "40 min",
    steps: [
      { title: "Add DataStore dependency", body: "In build.gradle:", code: `implementation "androidx.datastore:datastore-preferences:1.0.0"` },
      { title: "Create DataStore Manager", body: "Define keys and read/write operations:", code: `class UserPreferences(private val context: Context) {
    private val Context.dataStore by preferencesDataStore("user_prefs")

    companion object {
        val USERNAME = stringPreferencesKey("username")
        val DARK_MODE = booleanPreferencesKey("dark_mode")
    }

    val username: Flow&lt;String&gt; = context.dataStore.data
        .map { prefs -> prefs[USERNAME] ?: "" }

    val isDarkMode: Flow&lt;Boolean&gt; = context.dataStore.data
        .map { prefs -> prefs[DARK_MODE] ?: false }

    suspend fun saveUsername(name: String) {
        context.dataStore.edit { prefs -> prefs[USERNAME] = name }
    }

    suspend fun setDarkMode(enabled: Boolean) {
        context.dataStore.edit { prefs -> prefs[DARK_MODE] = enabled }
    }
}` },
      { title: "Collect in ViewModel", body: "Observe DataStore as Flow:", code: `class SettingsViewModel(private val prefs: UserPreferences) : ViewModel() {
    val username = prefs.username.asLiveData()
    val isDarkMode = prefs.isDarkMode.asLiveData()

    fun updateUsername(name: String) {
        viewModelScope.launch { prefs.saveUsername(name) }
    }
}` }
    ]
  },
  {
    id: 14,
    title: "Glide Image Loading",
    desc: "Load, cache, and display images from URLs efficiently using Glide.",
    icon: "fas fa-image",
    color: "#ec4899",
    category: "Beginner",
    tags: ["Glide", "Images", "Caching"],
    difficulty: "Beginner",
    time: "20 min",
    steps: [
      { title: "Add Glide dependency", body: "In build.gradle:", code: `implementation "com.github.bumptech.glide:glide:4.16.0"` },
      { title: "Load images with Glide", body: "Various loading options:", code: `// Basic load
Glide.with(context)
    .load("https://example.com/image.jpg")
    .into(imageView)

// With placeholder and error
Glide.with(context)
    .load(imageUrl)
    .placeholder(R.drawable.ic_loading)
    .error(R.drawable.ic_error)
    .centerCrop()
    .into(imageView)

// Circular image
Glide.with(context)
    .load(avatarUrl)
    .circleCrop()
    .into(ivAvatar)

// With custom size
Glide.with(context)
    .load(imageUrl)
    .override(300, 300)
    .diskCacheStrategy(DiskCacheStrategy.ALL)
    .into(imageView)` }
    ]
  },
  {
    id: 19,
    title: "Bottom Navigation",
    desc: "Implement a bottom navigation bar with multiple fragments and proper back stack.",
    icon: "fas fa-bars",
    color: "#3b82f6",
    category: "Intermediate",
    tags: ["BottomNav", "Navigation", "Fragments"],
    difficulty: "Intermediate",
    time: "45 min",
    steps: [
      { title: "Create menu resource (res/menu/bottom_nav.xml)", body: "Define navigation items:", code: `&lt;menu xmlns:android="http://schemas.android.com/apk/res/android"&gt;
    &lt;item android:id="@+id/homeFragment" android:icon="@drawable/ic_home" android:title="Home" /&gt;
    &lt;item android:id="@+id/searchFragment" android:icon="@drawable/ic_search" android:title="Search" /&gt;
    &lt;item android:id="@+id/profileFragment" android:icon="@drawable/ic_profile" android:title="Profile" /&gt;
&lt;/menu&gt;` },
      { title: "Add BottomNavigationView to layout", body: "In activity_main.xml:", code: `&lt;androidx.fragment.app.FragmentContainerView
    android:id="@+id/navHostFragment"
    android:name="androidx.navigation.fragment.NavHostFragment"
    android:layout_width="match_parent"
    android:layout_height="0dp"
    app:layout_constraintBottom_toTopOf="@id/bottomNav"
    app:navGraph="@navigation/nav_graph"
    app:defaultNavHost="true" /&gt;

&lt;com.google.android.material.bottomnavigation.BottomNavigationView
    android:id="@+id/bottomNav"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    app:menu="@menu/bottom_nav" /&gt;` },
      { title: "Connect with NavController", body: "In MainActivity.kt:", code: `class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val navController = findNavController(R.id.navHostFragment)
        val bottomNav = findViewById&lt;BottomNavigationView&gt;(R.id.bottomNav)
        bottomNav.setupWithNavController(navController)
    }
}` }
    ]
  },
  {
    id: 20,
    title: "Custom Dialog",
    desc: "Create beautiful custom dialogs and bottom sheets for user interactions.",
    icon: "fas fa-comment-dots",
    color: "#84cc16",
    category: "Intermediate",
    tags: ["Dialog", "BottomSheet", "AlertDialog"],
    difficulty: "Intermediate",
    time: "30 min",
    steps: [
      { title: "Custom AlertDialog", body: "Build a styled dialog:", code: `fun showConfirmDialog(context: Context, onConfirm: () -> Unit) {
    MaterialAlertDialogBuilder(context)
        .setTitle("Delete Item")
        .setMessage("Are you sure you want to delete this item? This cannot be undone.")
        .setIcon(R.drawable.ic_delete)
        .setPositiveButton("Delete") { _, _ -> onConfirm() }
        .setNegativeButton("Cancel", null)
        .show()
}` },
      { title: "BottomSheetDialogFragment", body: "Create a reusable bottom sheet:", code: `class OptionsBottomSheet : BottomSheetDialogFragment() {
    var onOptionSelected: ((String) -> Unit)? = null

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View {
        return inflater.inflate(R.layout.bottom_sheet_options, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        view.findViewById&lt;TextView&gt;(R.id.tvEdit).setOnClickListener {
            onOptionSelected?.invoke("edit")
            dismiss()
        }
        view.findViewById&lt;TextView&gt;(R.id.tvDelete).setOnClickListener {
            onOptionSelected?.invoke("delete")
            dismiss()
        }
    }
}

// Usage
val sheet = OptionsBottomSheet()
sheet.onOptionSelected = { option -> handleOption(option) }
sheet.show(supportFragmentManager, "options")` }
    ]
  },
  {
    id: 15,
    title: "Swipe to Refresh",
    desc: "Add pull-to-refresh functionality to lists and content views.",
    icon: "fas fa-sync-alt",
    color: "#f59e0b",
    category: "Beginner",
    tags: ["SwipeRefresh", "UX", "RecyclerView"],
    difficulty: "Beginner",
    time: "20 min",
    steps: [
      { title: "Add dependency", body: "In build.gradle:", code: `implementation "androidx.swiperefreshlayout:swiperefreshlayout:1.1.0"` },
      { title: "Wrap RecyclerView in layout", body: "In your XML layout:", code: `&lt;androidx.swiperefreshlayout.widget.SwipeRefreshLayout
    android:id="@+id/swipeRefresh"
    android:layout_width="match_parent"
    android:layout_height="match_parent"&gt;

    &lt;androidx.recyclerview.widget.RecyclerView
        android:id="@+id/recyclerView"
        android:layout_width="match_parent"
        android:layout_height="match_parent" /&gt;

&lt;/androidx.swiperefreshlayout.widget.SwipeRefreshLayout&gt;` },
      { title: "Handle refresh in Activity", body: "Trigger data reload on swipe:", code: `binding.swipeRefresh.setOnRefreshListener {
    viewModel.refreshData()
}

viewModel.isLoading.observe(this) { isLoading ->
    binding.swipeRefresh.isRefreshing = isLoading
}

// Customize colors
binding.swipeRefresh.setColorSchemeResources(
    R.color.purple_500,
    R.color.teal_200,
    R.color.purple_700
)` }
    ]
  },
  {
    id: 28,
    title: "Firebase Authentication",
    desc: "Implement email/password and Google Sign-In using Firebase Auth.",
    icon: "fas fa-fire",
    color: "#f97316",
    category: "Advanced",
    tags: ["Firebase", "Auth", "Google SignIn"],
    difficulty: "Advanced",
    time: "90 min",
    steps: [
      { title: "Setup Firebase", body: "Add google-services.json to app folder, then in build.gradle:", code: `// project build.gradle
classpath 'com.google.gms:google-services:4.4.0'

// app build.gradle
apply plugin: 'com.google.gms.google-services'
implementation platform('com.google.firebase:firebase-bom:32.7.0')
implementation 'com.google.firebase:firebase-auth-ktx'` },
      { title: "Email/Password Auth", body: "Register and login with email:", code: `class AuthViewModel : ViewModel() {
    private val auth = FirebaseAuth.getInstance()

    fun register(email: String, password: String, onResult: (Boolean, String?) -> Unit) {
        auth.createUserWithEmailAndPassword(email, password)
            .addOnCompleteListener { task ->
                if (task.isSuccessful) onResult(true, null)
                else onResult(false, task.exception?.message)
            }
    }

    fun login(email: String, password: String, onResult: (Boolean, String?) -> Unit) {
        auth.signInWithEmailAndPassword(email, password)
            .addOnCompleteListener { task ->
                if (task.isSuccessful) onResult(true, null)
                else onResult(false, task.exception?.message)
            }
    }

    fun logout() = auth.signOut()
    fun currentUser() = auth.currentUser
}` }
    ]
  },
  {
    id: 29,
    title: "Maps & Location",
    desc: "Display Google Maps, get current location, and add custom markers.",
    icon: "fas fa-map-marked-alt",
    color: "#22c55e",
    category: "Advanced",
    tags: ["Maps", "Location", "GPS"],
    difficulty: "Advanced",
    time: "75 min",
    steps: [
      { title: "Add Maps dependency & API key", body: "In build.gradle and AndroidManifest.xml:", code: `// build.gradle
implementation 'com.google.android.gms:play-services-maps:18.2.0'
implementation 'com.google.android.gms:play-services-location:21.1.0'

// AndroidManifest.xml
&lt;meta-data
    android:name="com.google.android.geo.API_KEY"
    android:value="YOUR_API_KEY_HERE" /&gt;` },
      { title: "Setup MapFragment", body: "In your layout and Activity:", code: `// activity_maps.xml
&lt;fragment
    android:id="@+id/mapFragment"
    android:name="com.google.android.gms.maps.SupportMapFragment"
    android:layout_width="match_parent"
    android:layout_height="match_parent" /&gt;` },
      { title: "MapsActivity.kt", body: "Initialize map and get location:", code: `class MapsActivity : AppCompatActivity(), OnMapReadyCallback {
    private lateinit var map: GoogleMap
    private lateinit var fusedLocationClient: FusedLocationProviderClient

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_maps)
        fusedLocationClient = LocationServices.getFusedLocationProviderClient(this)
        val mapFragment = supportFragmentManager.findFragmentById(R.id.mapFragment) as SupportMapFragment
        mapFragment.getMapAsync(this)
    }

    override fun onMapReady(googleMap: GoogleMap) {
        map = googleMap
        map.uiSettings.isZoomControlsEnabled = true

        if (ContextCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION)
            == PackageManager.PERMISSION_GRANTED) {
            map.isMyLocationEnabled = true
            fusedLocationClient.lastLocation.addOnSuccessListener { location ->
                location?.let {
                    val latLng = LatLng(it.latitude, it.longitude)
                    map.addMarker(MarkerOptions().position(latLng).title("You are here"))
                    map.animateCamera(CameraUpdateFactory.newLatLngZoom(latLng, 15f))
                }
            }
        }
    }
}` }
    ]
  }
];

// Merge all examples and sort by id
const allExamples = [...androidExamples, ...androidExamples2].sort((a, b) => a.id - b.id);

// Resources data
const resources = [
  { icon: "fas fa-book", title: "Official Android Docs", desc: "Complete Android developer documentation by Google.", link: "https://developer.android.com", label: "developer.android.com" },
  { icon: "fas fa-graduation-cap", title: "Kotlin Docs", desc: "Official Kotlin language reference and tutorials.", link: "https://kotlinlang.org/docs", label: "kotlinlang.org" },
  { icon: "fas fa-flask", title: "Android Codelabs", desc: "Hands-on coding exercises from Google.", link: "https://codelabs.developers.google.com", label: "codelabs.developers.google.com" },
  { icon: "fab fa-youtube", title: "Android Developers YouTube", desc: "Official video tutorials and talks from Google.", link: "https://youtube.com/@AndroidDevelopers", label: "YouTube" },
  { icon: "fas fa-fire", title: "Firebase Console", desc: "Backend services for Android apps.", link: "https://console.firebase.google.com", label: "firebase.google.com" },
  { icon: "fas fa-tools", title: "Android Studio", desc: "The official IDE for Android development.", link: "https://developer.android.com/studio", label: "Download IDE" },
  { icon: "fas fa-box-open", title: "Jetpack Libraries", desc: "Suite of libraries to help build robust Android apps.", link: "https://developer.android.com/jetpack", label: "Jetpack" },
  { icon: "fab fa-stack-overflow", title: "Stack Overflow", desc: "Community Q&A for Android development questions.", link: "https://stackoverflow.com/questions/tagged/android", label: "stackoverflow.com" }
];
