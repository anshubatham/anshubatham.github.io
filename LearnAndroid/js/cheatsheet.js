const cheatSheets = [
  {
    category: "Kotlin Essentials",
    icon: "fas fa-k",
    color: "#6c63ff",
    items: [
      { title: "Variables", code: `val name = "Alice"   // immutable\nvar age = 25         // mutable\nvar email: String? = null  // nullable` },
      { title: "String Templates", code: `val msg = "Hello, \${name}! Age: \$age"` },
      { title: "When Expression", code: `val result = when (score) {\n    in 90..100 -> "A"\n    in 80..89  -> "B"\n    else       -> "F"\n}` },
      { title: "Data Class", code: `data class User(val id: Int, val name: String)\nval u = User(1, "Alice")\nval u2 = u.copy(name = "Bob")` },
      { title: "Scope Functions", code: `obj.apply { name = "x" }   // returns obj\nobj.also { log(it) }       // returns obj\nobj.let { it.name }        // returns result\nobj.run { name.length }    // returns result` },
      { title: "Extension Function", code: `fun String.isPalindrome() = this == this.reversed()` }
    ]
  },
  {
    category: "Collections",
    icon: "fas fa-list",
    color: "#06b6d4",
    items: [
      { title: "Create Collections", code: `val list = listOf(1, 2, 3)          // immutable\nval mList = mutableListOf(1, 2, 3)  // mutable\nval map = mapOf("a" to 1, "b" to 2)\nval set = setOf(1, 2, 3)` },
      { title: "Filter & Map", code: `val evens = list.filter { it % 2 == 0 }\nval doubled = list.map { it * 2 }\nval sum = list.reduce { acc, n -> acc + n }\nval first = list.firstOrNull { it > 2 }` },
      { title: "Ranges", code: `for (i in 1..10) { }          // 1 to 10\nfor (i in 1 until 10) { }    // 1 to 9\nfor (i in 10 downTo 1) { }   // 10 to 1\nfor (i in 0..20 step 2) { }  // 0,2,4...` }
    ]
  },
  {
    category: "Android Views",
    icon: "fas fa-mobile-alt",
    color: "#22c55e",
    items: [
      { title: "ViewBinding Setup", code: `// build.gradle\nbuildFeatures { viewBinding = true }\n\n// Activity\nprivate lateinit var binding: ActivityMainBinding\nbinding = ActivityMainBinding.inflate(layoutInflater)\nsetContentView(binding.root)` },
      { title: "Click Listeners", code: `binding.btn.setOnClickListener { /* action */ }\nbinding.btn.setOnLongClickListener { true }\nbinding.etName.setOnEditorActionListener { _, id, _ ->\n    if (id == EditorInfo.IME_ACTION_DONE) { true } else false\n}` },
      { title: "Toast & Snackbar", code: `Toast.makeText(this, "msg", Toast.LENGTH_SHORT).show()\nSnackbar.make(binding.root, "msg", Snackbar.LENGTH_LONG)\n    .setAction("Undo") { }.show()` },
      { title: "View Visibility", code: `view.visibility = View.VISIBLE\nview.visibility = View.GONE\nview.visibility = View.INVISIBLE\nview.isVisible = true  // ktx extension` }
    ]
  },
  {
    category: "Coroutines",
    icon: "fas fa-bolt",
    color: "#f59e0b",
    items: [
      { title: "Launch Coroutine", code: `// In ViewModel\nviewModelScope.launch {\n    val data = withContext(Dispatchers.IO) { fetchData() }\n    _state.value = data\n}\n\n// In Fragment\nlifecycleScope.launch { /* ... */ }` },
      { title: "Async / Await", code: `val deferred1 = async { fetchUser() }\nval deferred2 = async { fetchPosts() }\nval user  = deferred1.await()\nval posts = deferred2.await()` },
      { title: "Flow", code: `fun dataFlow(): Flow<Int> = flow {\n    emit(1); delay(500); emit(2)\n}\n\n// Collect\nlaunch { dataFlow().collect { println(it) } }` },
      { title: "StateFlow", code: `private val _state = MutableStateFlow(UiState())\nval state = _state.asStateFlow()\n\n// Update\n_state.update { it.copy(loading = true) }\n\n// Collect\nrepeatOnLifecycle(STARTED) {\n    state.collect { render(it) }\n}` }
    ]
  },
  {
    category: "Jetpack",
    icon: "fas fa-rocket",
    color: "#8b5cf6",
    items: [
      { title: "ViewModel", code: `class MyVM : ViewModel() {\n    private val _data = MutableLiveData<String>()\n    val data: LiveData<String> = _data\n    fun load() { _data.value = "Hello" }\n}\n// In Activity\nval vm: MyVM by viewModels()` },
      { title: "Room Quick Setup", code: `@Entity data class Note(@PrimaryKey(autoGenerate=true) val id:Int=0, val text:String)\n@Dao interface NoteDao {\n    @Query("SELECT * FROM note") fun all(): Flow<List<Note>>\n    @Insert suspend fun insert(n: Note)\n}` },
      { title: "Navigation", code: `// Navigate\nfindNavController().navigate(R.id.action_home_to_detail)\n// With args\nval action = HomeDirections.actionToDetail(id = 42)\nfindNavController().navigate(action)\n// Back\nfindNavController().popBackStack()` },
      { title: "Hilt Quick", code: `@HiltAndroidApp class App : Application()\n@AndroidEntryPoint class MainActivity : AppCompatActivity()\n@HiltViewModel class MyVM @Inject constructor(\n    private val repo: MyRepo\n) : ViewModel()` }
    ]
  },
  {
    category: "Gradle & Setup",
    icon: "fas fa-cog",
    color: "#ef4444",
    items: [
      { title: "Common Dependencies", code: `// Lifecycle\nimplementation "androidx.lifecycle:lifecycle-viewmodel-ktx:2.7.0"\n// Coroutines\nimplementation "org.jetbrains.kotlinx:kotlinx-coroutines-android:1.7.3"\n// Retrofit\nimplementation "com.squareup.retrofit2:retrofit:2.9.0"\n// Room\nimplementation "androidx.room:room-ktx:2.6.1"` },
      { title: "Manifest Permissions", code: `&lt;uses-permission android:name="android.permission.INTERNET" /&gt;\n&lt;uses-permission android:name="android.permission.CAMERA" /&gt;\n&lt;uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" /&gt;` }
    ]
  }
];
