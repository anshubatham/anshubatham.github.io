// ===== NEW EXAMPLES: ViewPager2, TabLayout, StateFlow, Clean Architecture =====
const extraExamples = [
  {
    id: 31,
    title: "ViewPager2 & TabLayout",
    desc: "Swipeable screens with tab indicators using ViewPager2 and TabLayoutMediator.",
    icon: "fas fa-clone",
    color: "#06b6d4",
    category: "Intermediate",
    tags: ["ViewPager2", "TabLayout", "Fragments"],
    difficulty: "Intermediate",
    time: "50 min",
    steps: [
      { title: "Add dependencies", body: "In build.gradle (app):", code: `implementation "androidx.viewpager2:viewpager2:1.0.0"
implementation "com.google.android.material:material:1.11.0"` },
      { title: "Create layout with ViewPager2 + TabLayout", body: "In activity_main.xml:", code: `&lt;LinearLayout
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"&gt;

    &lt;com.google.android.material.tabs.TabLayout
        android:id="@+id/tabLayout"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        app:tabGravity="fill"
        app:tabMode="fixed"
        app:tabIndicatorColor="@color/purple_500"
        app:tabSelectedTextColor="@color/purple_500" /&gt;

    &lt;androidx.viewpager2.widget.ViewPager2
        android:id="@+id/viewPager"
        android:layout_width="match_parent"
        android:layout_height="0dp"
        android:layout_weight="1" /&gt;
&lt;/LinearLayout&gt;` },
      { title: "Create FragmentStateAdapter", body: "Adapter that manages fragments for each page:", code: `class OnboardingAdapter(activity: FragmentActivity) :
    FragmentStateAdapter(activity) {

    private val pages = listOf(
        PageFragment.newInstance("Home", R.drawable.ic_home),
        PageFragment.newInstance("Search", R.drawable.ic_search),
        PageFragment.newInstance("Profile", R.drawable.ic_person)
    )

    override fun getItemCount() = pages.size
    override fun createFragment(position: Int) = pages[position]
}` },
      { title: "Connect with TabLayoutMediator", body: "Wire ViewPager2 to TabLayout in Activity:", code: `class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        val adapter = OnboardingAdapter(this)
        binding.viewPager.adapter = adapter

        val tabTitles = listOf("Home", "Search", "Profile")
        val tabIcons  = listOf(R.drawable.ic_home, R.drawable.ic_search, R.drawable.ic_person)

        TabLayoutMediator(binding.tabLayout, binding.viewPager) { tab, pos ->
            tab.text = tabTitles[pos]
            tab.setIcon(tabIcons[pos])
        }.attach()

        // Disable swipe if needed
        // binding.viewPager.isUserInputEnabled = false
    }
}`, output: `<div style="padding:0;background:#fff"><div style="background:#6c63ff;padding:0"><div style="display:flex"><div style="flex:1;padding:8px;text-align:center;border-bottom:2px solid #fff;font-size:0.6rem;color:#fff;font-weight:700">🏠 Home</div><div style="flex:1;padding:8px;text-align:center;border-bottom:2px solid rgba(255,255,255,0.3);font-size:0.6rem;color:rgba(255,255,255,0.7)">🔍 Search</div><div style="flex:1;padding:8px;text-align:center;border-bottom:2px solid rgba(255,255,255,0.3);font-size:0.6rem;color:rgba(255,255,255,0.7)">👤 Profile</div></div></div><div style="padding:16px;display:flex;align-items:center;justify-content:center;min-height:80px"><div style="text-align:center"><div style="font-size:1.5rem">🏠</div><div style="font-size:0.65rem;font-weight:700;color:#333;margin-top:4px">Home Fragment</div><div style="font-size:0.55rem;color:#888;margin-top:2px">← Swipe to navigate →</div></div></div></div>` }
    ]
  },
  {
    id: 32,
    title: "Fragment Lifecycle",
    desc: "Understand Fragment lifecycle callbacks and manage state correctly across configuration changes.",
    icon: "fas fa-recycle",
    color: "#f59e0b",
    category: "Intermediate",
    tags: ["Fragment", "Lifecycle", "BackStack"],
    difficulty: "Intermediate",
    time: "40 min",
    steps: [
      { title: "Fragment lifecycle overview", body: "Key callbacks in order:", code: `class MyFragment : Fragment(R.layout.fragment_my) {

    // Called when fragment is attached to activity
    override fun onAttach(context: Context) { super.onAttach(context) }

    // Called to create the fragment's view
    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?): View? {
        return inflater.inflate(R.layout.fragment_my, container, false)
    }

    // View is ready — do UI setup here
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        // Safe to access views here
    }

    override fun onStart()   { super.onStart() }   // Fragment visible
    override fun onResume()  { super.onResume() }  // Fragment interactive
    override fun onPause()   { super.onPause() }   // Losing focus
    override fun onStop()    { super.onStop() }    // Not visible
    override fun onDestroyView() { super.onDestroyView() } // View destroyed
    override fun onDetach()  { super.onDetach() }  // Detached from activity
}` },
      { title: "Save & restore state", body: "Persist data across configuration changes:", code: `class CounterFragment : Fragment(R.layout.fragment_counter) {
    private var count = 0

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        // Restore state
        count = savedInstanceState?.getInt("count") ?: 0
        binding.tvCount.text = count.toString()

        binding.btnAdd.setOnClickListener {
            count++
            binding.tvCount.text = count.toString()
        }
    }

    override fun onSaveInstanceState(outState: Bundle) {
        super.onSaveInstanceState(outState)
        outState.putInt("count", count)
    }
}` },
      { title: "Fragment transactions & back stack", body: "Navigate between fragments properly:", code: `// Add fragment to back stack
supportFragmentManager.commit {
    replace(R.id.fragmentContainer, DetailFragment())
    addToBackStack("detail")
    setCustomAnimations(
        R.anim.slide_in_right, R.anim.slide_out_left,
        R.anim.slide_in_left, R.anim.slide_out_right
    )
}

// Pop back stack
supportFragmentManager.popBackStack()

// Check if fragment is in back stack
val count = supportFragmentManager.backStackEntryCount` }
    ]
  },
  {
    id: 33,
    title: "StateFlow & SharedFlow",
    desc: "Modern reactive state management using Kotlin's StateFlow and SharedFlow in MVVM.",
    icon: "fas fa-stream",
    color: "#8b5cf6",
    category: "Advanced",
    tags: ["StateFlow", "SharedFlow", "Flow"],
    difficulty: "Advanced",
    time: "60 min",
    steps: [
      { title: "StateFlow vs LiveData", body: "StateFlow is the modern coroutine-based alternative to LiveData:", code: `class UserViewModel : ViewModel() {

    // StateFlow — always has a value, like LiveData
    private val _uiState = MutableStateFlow(UiState())
    val uiState: StateFlow&lt;UiState&gt; = _uiState.asStateFlow()

    // SharedFlow — for one-time events (navigation, snackbar)
    private val _events = MutableSharedFlow&lt;UiEvent&gt;()
    val events: SharedFlow&lt;UiEvent&gt; = _events.asSharedFlow()

    fun loadUser(id: Int) {
        viewModelScope.launch {
            _uiState.update { it.copy(isLoading = true) }
            try {
                val user = repository.getUser(id)
                _uiState.update { it.copy(user = user, isLoading = false) }
            } catch (e: Exception) {
                _events.emit(UiEvent.ShowError(e.message ?: "Error"))
                _uiState.update { it.copy(isLoading = false) }
            }
        }
    }
}

data class UiState(val user: User? = null, val isLoading: Boolean = false)
sealed class UiEvent { data class ShowError(val msg: String) : UiEvent() }` },
      { title: "Collect StateFlow in Fragment", body: "Use repeatOnLifecycle for safe collection:", code: `class UserFragment : Fragment(R.layout.fragment_user) {
    private val viewModel: UserViewModel by viewModels()

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        // Collect state — lifecycle-aware
        viewLifecycleOwner.lifecycleScope.launch {
            viewLifecycleOwner.repeatOnLifecycle(Lifecycle.State.STARTED) {
                launch {
                    viewModel.uiState.collect { state ->
                        binding.progressBar.isVisible = state.isLoading
                        state.user?.let { binding.tvName.text = it.name }
                    }
                }
                launch {
                    viewModel.events.collect { event ->
                        when (event) {
                            is UiEvent.ShowError ->
                                Snackbar.make(binding.root, event.msg, Snackbar.LENGTH_LONG).show()
                        }
                    }
                }
            }
        }
    }
}`, output: `<div style="padding:10px;background:#fff"><div style="font-size:0.6rem;font-weight:700;color:#06b6d4;margin-bottom:8px">👤 User Profile</div><div style="display:flex;flex-direction:column;gap:6px"><div style="display:flex;align-items:center;gap:8px;padding:8px;background:#f0fdfe;border-radius:8px"><div style="width:32px;height:32px;border-radius:50%;background:#06b6d4;display:flex;align-items:center;justify-content:center;color:#fff;font-size:0.8rem;font-weight:700">A</div><div><div style="font-size:0.65rem;font-weight:700;color:#333">Alice</div><div style="font-size:0.55rem;color:#888">alice@example.com</div></div></div><div style="background:#f0fdfe;border-radius:6px;padding:6px;font-size:0.55rem;color:#06b6d4;font-weight:700;text-align:center">✓ StateFlow updated UI reactively</div></div></div>` }
    ]
  },
  {
    id: 34,
    title: "Clean Architecture",
    desc: "Structure your Android app with Clean Architecture: Data, Domain, and Presentation layers.",
    icon: "fas fa-sitemap",
    color: "#10b981",
    category: "Advanced",
    tags: ["Clean Arch", "MVVM", "UseCases"],
    difficulty: "Advanced",
    time: "90 min",
    steps: [
      { title: "Project structure", body: "Organize into 3 layers:", code: `app/
├── data/
│   ├── remote/          # Retrofit API, DTOs
│   ├── local/           # Room DB, DAOs
│   └── repository/      # Repository implementations
├── domain/
│   ├── model/           # Pure Kotlin data classes
│   ├── repository/      # Repository interfaces
│   └── usecase/         # Business logic (one action per class)
└── presentation/
    ├── ui/              # Activities, Fragments
    └── viewmodel/       # ViewModels` },
      { title: "Domain layer — UseCase", body: "Each use case does exactly one thing:", code: `// Domain model (pure Kotlin, no Android imports)
data class User(val id: Int, val name: String, val email: String)

// Repository interface (domain layer)
interface UserRepository {
    suspend fun getUser(id: Int): Result&lt;User&gt;
    suspend fun getUsers(): Result&lt;List&lt;User&gt;&gt;
}

// Use case
class GetUserUseCase(private val repository: UserRepository) {
    suspend operator fun invoke(id: Int): Result&lt;User&gt; {
        return repository.getUser(id)
    }
}` },
      { title: "Data layer — Repository implementation", body: "Implements domain interface, maps DTOs to models:", code: `// Remote DTO
data class UserDto(val id: Int, val name: String, val email: String)
fun UserDto.toDomain() = User(id, name, email)

// Repository implementation
class UserRepositoryImpl(
    private val api: ApiService,
    private val dao: UserDao
) : UserRepository {

    override suspend fun getUser(id: Int): Result&lt;User&gt; {
        return try {
            val dto = api.getUser(id)
            dao.insert(dto.toEntity())
            Result.success(dto.toDomain())
        } catch (e: Exception) {
            // Fallback to cache
            val cached = dao.getUser(id)
            if (cached != null) Result.success(cached.toDomain())
            else Result.failure(e)
        }
    }
}` },
      { title: "Presentation layer — ViewModel", body: "ViewModel uses use cases, never touches data layer directly:", code: `class UserViewModel(
    private val getUser: GetUserUseCase
) : ViewModel() {

    private val _state = MutableStateFlow&lt;UserState&gt;(UserState.Loading)
    val state: StateFlow&lt;UserState&gt; = _state.asStateFlow()

    fun loadUser(id: Int) {
        viewModelScope.launch {
            _state.value = UserState.Loading
            getUser(id)
                .onSuccess { _state.value = UserState.Success(it) }
                .onFailure { _state.value = UserState.Error(it.message ?: "Error") }
        }
    }
}

sealed class UserState {
    object Loading : UserState()
    data class Success(val user: User) : UserState()
    data class Error(val message: String) : UserState()
}`, output: `<div style="padding:10px;background:#fff"><div style="font-size:0.6rem;font-weight:700;color:#10b981;margin-bottom:8px">🏗️ Clean Architecture</div><div style="display:flex;flex-direction:column;gap:4px"><div style="background:#f0fdf4;border-left:3px solid #10b981;padding:6px 8px;border-radius:0 6px 6px 0;font-size:0.55rem;color:#333"><span style="font-weight:700;color:#10b981">UI Layer</span> → ViewModel.loadUser(1)</div><div style="background:#eff6ff;border-left:3px solid #3b82f6;padding:6px 8px;border-radius:0 6px 6px 0;font-size:0.55rem;color:#333"><span style="font-weight:700;color:#3b82f6">Domain</span> → GetUserUseCase.invoke()</div><div style="background:#faf5ff;border-left:3px solid #8b5cf6;padding:6px 8px;border-radius:0 6px 6px 0;font-size:0.55rem;color:#333"><span style="font-weight:700;color:#8b5cf6">Data</span> → UserRepositoryImpl.getUser()</div><div style="background:#f0fdf4;border-radius:6px;padding:6px;font-size:0.55rem;color:#22c55e;font-weight:700;text-align:center;margin-top:4px">✓ Success: User("Alice") loaded</div></div></div>` }
    ]
  },
  {
    id: 35,
    title: "Paging 3",
    desc: "Load large datasets efficiently with Paging 3 library — infinite scroll made easy.",
    icon: "fas fa-infinity",
    color: "#ef4444",
    category: "Advanced",
    tags: ["Paging3", "PagingSource", "LazyLoad"],
    difficulty: "Advanced",
    time: "70 min",
    steps: [
      { title: "Add Paging 3 dependency", body: "In build.gradle:", code: `implementation "androidx.paging:paging-runtime-ktx:3.2.1"` },
      { title: "Create PagingSource", body: "Define how to load pages of data:", code: `class PostPagingSource(private val api: ApiService) : PagingSource&lt;Int, Post&gt;() {

    override suspend fun load(params: LoadParams&lt;Int&gt;): LoadResult&lt;Int, Post&gt; {
        val page = params.key ?: 1
        return try {
            val response = api.getPosts(page = page, limit = params.loadSize)
            LoadResult.Page(
                data = response.posts,
                prevKey = if (page == 1) null else page - 1,
                nextKey = if (response.posts.isEmpty()) null else page + 1
            )
        } catch (e: Exception) {
            LoadResult.Error(e)
        }
    }

    override fun getRefreshKey(state: PagingState&lt;Int, Post&gt;): Int? {
        return state.anchorPosition?.let { anchor ->
            state.closestPageToPosition(anchor)?.prevKey?.plus(1)
                ?: state.closestPageToPosition(anchor)?.nextKey?.minus(1)
        }
    }
}` },
      { title: "ViewModel + PagingData", body: "Expose paged data as Flow:", code: `class PostsViewModel(private val api: ApiService) : ViewModel() {
    val posts: Flow&lt;PagingData&lt;Post&gt;&gt; = Pager(
        config = PagingConfig(pageSize = 20, enablePlaceholders = false),
        pagingSourceFactory = { PostPagingSource(api) }
    ).flow.cachedIn(viewModelScope)
}` },
      { title: "PagingDataAdapter in Fragment", body: "Use PagingDataAdapter with DiffUtil:", code: `class PostAdapter : PagingDataAdapter&lt;Post, PostViewHolder&gt;(DIFF_CALLBACK) {
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int) =
        PostViewHolder(ItemPostBinding.inflate(LayoutInflater.from(parent.context), parent, false))

    override fun onBindViewHolder(holder: PostViewHolder, position: Int) {
        getItem(position)?.let { holder.bind(it) }
    }

    companion object {
        val DIFF_CALLBACK = object : DiffUtil.ItemCallback&lt;Post&gt;() {
            override fun areItemsTheSame(old: Post, new: Post) = old.id == new.id
            override fun areContentsTheSame(old: Post, new: Post) = old == new
        }
    }
}

// In Fragment
lifecycleScope.launch {
    viewModel.posts.collectLatest { adapter.submitData(it) }
}`, output: `<div style="padding:10px;background:#fff"><div style="font-size:0.6rem;font-weight:700;color:#ef4444;margin-bottom:8px">∞ Paging 3 — Infinite Scroll</div><div style="display:flex;flex-direction:column;gap:4px"><div style="background:#fff5f5;border-left:3px solid #ef4444;padding:6px 8px;border-radius:0 6px 6px 0;font-size:0.6rem;color:#333">sunt aut facere repellat... <span style="color:#aaa">#1</span></div><div style="background:#fff5f5;border-left:3px solid #ef4444;padding:6px 8px;border-radius:0 6px 6px 0;font-size:0.6rem;color:#333">qui est esse <span style="color:#aaa">#2</span></div><div style="background:#fff5f5;border-left:3px solid #ef4444;padding:6px 8px;border-radius:0 6px 6px 0;font-size:0.6rem;color:#333">ea molestias quasi... <span style="color:#aaa">#3</span></div><div style="text-align:center;padding:6px"><div style="display:inline-block;width:16px;height:16px;border:2px solid #ef4444;border-top-color:transparent;border-radius:50%"></div><div style="font-size:0.5rem;color:#aaa;margin-top:2px">Loading page 2...</div></div></div></div>` }
    ]
  },
  {
    id: 36,
    title: "Unit Testing with JUnit",
    desc: "Write unit tests for ViewModels and use cases using JUnit4, MockK, and Turbine.",
    icon: "fas fa-vial",
    color: "#64748b",
    category: "Advanced",
    tags: ["JUnit", "MockK", "Testing"],
    difficulty: "Advanced",
    time: "60 min",
    steps: [
      { title: "Add test dependencies", body: "In build.gradle:", code: `testImplementation "junit:junit:4.13.2"
testImplementation "io.mockk:mockk:1.13.9"
testImplementation "org.jetbrains.kotlinx:kotlinx-coroutines-test:1.7.3"
testImplementation "app.cash.turbine:turbine:1.0.0"` },
      { title: "Test a ViewModel with StateFlow", body: "Use Turbine to test Flow emissions:", code: `@OptIn(ExperimentalCoroutinesApi::class)
class UserViewModelTest {

    @get:Rule
    val mainDispatcherRule = MainDispatcherRule()

    private val repository = mockk&lt;UserRepository&gt;()
    private lateinit var viewModel: UserViewModel

    @Before
    fun setup() {
        viewModel = UserViewModel(GetUserUseCase(repository))
    }

    @Test
    fun \`loadUser emits success state\`() = runTest {
        val fakeUser = User(1, "Alice", "alice@test.com")
        coEvery { repository.getUser(1) } returns Result.success(fakeUser)

        viewModel.state.test {
            viewModel.loadUser(1)
            assertEquals(UserState.Loading, awaitItem())
            assertEquals(UserState.Success(fakeUser), awaitItem())
            cancelAndIgnoreRemainingEvents()
        }
    }

    @Test
    fun \`loadUser emits error on failure\`() = runTest {
        coEvery { repository.getUser(any()) } returns Result.failure(Exception("Network error"))

        viewModel.state.test {
            viewModel.loadUser(99)
            skipItems(1) // skip Loading
            val error = awaitItem() as UserState.Error
            assertEquals("Network error", error.message)
            cancelAndIgnoreRemainingEvents()
        }
    }
}`, output: `<div style="padding:10px;background:#fff"><div style="font-size:0.6rem;font-weight:700;color:#64748b;margin-bottom:8px">🧪 Test Results</div><div style="display:flex;flex-direction:column;gap:5px"><div style="display:flex;align-items:center;gap:6px;background:#f0fdf4;border-radius:6px;padding:7px"><div style="width:14px;height:14px;border-radius:50%;background:#22c55e;display:flex;align-items:center;justify-content:center;flex-shrink:0"><span style="color:#fff;font-size:0.5rem">✓</span></div><div><div style="font-size:0.58rem;font-weight:700;color:#333">loadUser emits success state</div><div style="font-size:0.5rem;color:#22c55e">PASSED · 12ms</div></div></div><div style="display:flex;align-items:center;gap:6px;background:#f0fdf4;border-radius:6px;padding:7px"><div style="width:14px;height:14px;border-radius:50%;background:#22c55e;display:flex;align-items:center;justify-content:center;flex-shrink:0"><span style="color:#fff;font-size:0.5rem">✓</span></div><div><div style="font-size:0.58rem;font-weight:700;color:#333">loadUser emits error on failure</div><div style="font-size:0.5rem;color:#22c55e">PASSED · 8ms</div></div></div><div style="background:#f0fdf4;border-radius:6px;padding:6px;text-align:center;margin-top:2px"><div style="font-size:0.6rem;font-weight:700;color:#22c55e">✓ BUILD SUCCESSFUL · 2/2 passed</div></div></div></div>` }
    ]
  }
];

if (typeof allExamples !== 'undefined') {
  allExamples.push(...extraExamples);
  allExamples.sort((a, b) => a.id - b.id);
}
