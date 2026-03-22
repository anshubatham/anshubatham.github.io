// ===== EXTRA BEGINNER EXAMPLES (3–12) =====
const beginnerExamples = [
  {
    id: 3,
    title: "EditText & Input Handling",
    desc: "Capture user text input, validate it, and respond with Toast or Snackbar messages.",
    icon: "fas fa-keyboard",
    color: "#6c63ff",
    category: "Beginner",
    tags: ["EditText", "InputType", "Validation"],
    difficulty: "Beginner",
    time: "20 min",
    steps: [
      {
        title: "Design the layout",
        body: "Add an EditText, Button, and TextView in activity_main.xml:",
        code: `&lt;LinearLayout
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="24dp"
    android:gravity="center"&gt;

    &lt;com.google.android.material.textfield.TextInputLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Enter your name"
        style="@style/Widget.MaterialComponents.TextInputLayout.OutlinedBox"&gt;

        &lt;com.google.android.material.textfield.TextInputEditText
            android:id="@+id/etName"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:inputType="textPersonName"
            android:imeOptions="actionDone" /&gt;
    &lt;/com.google.android.material.textfield.TextInputLayout&gt;

    &lt;Button
        android:id="@+id/btnSubmit"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="16dp"
        android:text="Submit" /&gt;

    &lt;TextView
        android:id="@+id/tvResult"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="24dp"
        android:textSize="20sp" /&gt;
&lt;/LinearLayout&gt;`
      },
      {
        title: "Handle input in MainActivity.kt",
        body: "Read text, validate, and display result:",
        code: `class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.btnSubmit.setOnClickListener {
            val name = binding.etName.text.toString().trim()
            when {
                name.isEmpty() -> binding.etName.error = "Name cannot be empty"
                name.length < 2 -> binding.etName.error = "Name too short"
                else -> {
                    binding.etName.error = null
                    binding.tvResult.text = "Hello, \$name!"
                    Snackbar.make(binding.root, "Welcome, \$name!", Snackbar.LENGTH_SHORT).show()
                }
            }
        }

        binding.etName.setOnEditorActionListener { _, actionId, _ ->
            if (actionId == EditorInfo.IME_ACTION_DONE) {
                binding.btnSubmit.performClick(); true
            } else false
        }
    }
}`,
        output: `<div style="padding:10px;background:#fff"><div style="font-size:0.6rem;font-weight:700;color:#6c63ff;margin-bottom:8px">📝 Form</div><div style="display:flex;flex-direction:column;gap:8px"><div style="border:2px solid #6c63ff;border-radius:8px;padding:8px"><div style="font-size:0.55rem;color:#6c63ff;margin-bottom:2px">Full Name</div><div style="font-size:0.65rem;color:#333">Alice</div></div><div style="background:#6c63ff;color:#fff;text-align:center;padding:8px;border-radius:8px;font-size:0.65rem;font-weight:700">Submit</div><div style="background:#f0fdf4;border-radius:6px;padding:6px;font-size:0.6rem;color:#22c55e;text-align:center">✓ Welcome, Alice!</div></div></div>`
      }
    ]
  },
  {
    id: 4,
    title: "ImageView & Shapes",
    desc: "Display images with different scale types, rounded corners, and drawable shapes.",
    icon: "fas fa-image",
    color: "#ec4899",
    category: "Beginner",
    tags: ["ImageView", "Drawable", "ShapeDrawable"],
    difficulty: "Beginner",
    time: "25 min",
    steps: [
      {
        title: "Add images to res/drawable",
        body: "Place your image files (PNG/JPG/WebP) in res/drawable. Then reference them in XML or code."
      },
      {
        title: "ImageView scale types",
        body: "Different scaleType values control how the image fills the view:",
        code: `&lt;!-- Fills view, crops if needed --&gt;
&lt;ImageView
    android:id="@+id/ivCover"
    android:layout_width="match_parent"
    android:layout_height="200dp"
    android:src="@drawable/my_image"
    android:scaleType="centerCrop"
    android:contentDescription="Cover image" /&gt;

&lt;!-- Fits inside, keeps aspect ratio --&gt;
&lt;ImageView
    android:layout_width="100dp"
    android:layout_height="100dp"
    android:src="@drawable/my_image"
    android:scaleType="fitCenter" /&gt;`
      },
      {
        title: "Rounded corners with Glide",
        body: "Use Glide transforms for rounded or circular images:",
        code: `// Rounded corners
Glide.with(this)
    .load(R.drawable.my_image)
    .transform(RoundedCorners(32))
    .into(binding.ivCover)

// Circle avatar
Glide.with(this)
    .load(R.drawable.avatar)
    .circleCrop()
    .into(binding.ivAvatar)`
      },
      {
        title: "Custom shape drawable (res/drawable/circle_bg.xml)",
        body: "Define shapes entirely in XML:",
        code: `&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;shape xmlns:android="http://schemas.android.com/apk/res/android"
    android:shape="oval"&gt;
    &lt;solid android:color="#6C63FF" /&gt;
    &lt;size android:width="80dp" android:height="80dp" /&gt;
&lt;/shape&gt;`
      }
    ]
  },
  {
    id: 5,
    title: "CheckBox, RadioButton & Switch",
    desc: "Use selection controls to capture boolean and single-choice user input.",
    icon: "fas fa-check-square",
    color: "#22c55e",
    category: "Beginner",
    tags: ["CheckBox", "RadioButton", "Switch"],
    difficulty: "Beginner",
    time: "20 min",
    steps: [
      {
        title: "Layout with all three controls",
        body: "Add CheckBox, RadioGroup, and Switch to your layout:",
        code: `&lt;LinearLayout
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:orientation="vertical"
    android:padding="24dp"&gt;

    &lt;CheckBox
        android:id="@+id/cbTerms"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="I agree to Terms &amp; Conditions" /&gt;

    &lt;RadioGroup
        android:id="@+id/rgGender"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        android:layout_marginTop="16dp"&gt;
        &lt;RadioButton android:id="@+id/rbMale" android:text="Male" /&gt;
        &lt;RadioButton android:id="@+id/rbFemale" android:text="Female" /&gt;
        &lt;RadioButton android:id="@+id/rbOther" android:text="Other" /&gt;
    &lt;/RadioGroup&gt;

    &lt;com.google.android.material.switchmaterial.SwitchMaterial
        android:id="@+id/switchNotif"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Enable Notifications"
        android:layout_marginTop="16dp" /&gt;
&lt;/LinearLayout&gt;`
      },
      {
        title: "Read values in Kotlin",
        body: "Listen to changes and read selected values:",
        code: `binding.cbTerms.setOnCheckedChangeListener { _, isChecked ->
    binding.btnSubmit.isEnabled = isChecked
}

binding.rgGender.setOnCheckedChangeListener { _, checkedId ->
    val gender = when (checkedId) {
        R.id.rbMale   -> "Male"
        R.id.rbFemale -> "Female"
        else          -> "Other"
    }
    Toast.makeText(this, "Selected: \$gender", Toast.LENGTH_SHORT).show()
}

binding.switchNotif.setOnCheckedChangeListener { _, isOn ->
    Toast.makeText(this, if (isOn) "Notifications ON" else "OFF", Toast.LENGTH_SHORT).show()
}`,
        output: `<div style="padding:10px;background:#fff"><div style="font-size:0.6rem;font-weight:700;color:#8b5cf6;margin-bottom:8px">⚙️ Preferences</div><div style="display:flex;flex-direction:column;gap:6px"><div style="display:flex;align-items:center;gap:6px;padding:6px;background:#faf5ff;border-radius:6px"><div style="width:14px;height:14px;border-radius:3px;background:#8b5cf6;display:flex;align-items:center;justify-content:center"><span style="color:#fff;font-size:0.5rem">✓</span></div><span style="font-size:0.6rem;color:#333">I agree to Terms</span></div><div style="padding:6px;background:#faf5ff;border-radius:6px"><div style="font-size:0.55rem;color:#888;margin-bottom:4px">Gender</div><div style="display:flex;gap:8px"><div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:10px;border-radius:50%;border:2px solid #8b5cf6;display:flex;align-items:center;justify-content:center"><div style="width:5px;height:5px;border-radius:50%;background:#8b5cf6"></div></div><span style="font-size:0.6rem">Female</span></div></div></div><div style="display:flex;align-items:center;justify-content:space-between;padding:6px;background:#faf5ff;border-radius:6px"><span style="font-size:0.6rem;color:#333">Notifications</span><div style="width:28px;height:16px;background:#8b5cf6;border-radius:8px;position:relative"><div style="width:12px;height:12px;background:#fff;border-radius:50%;position:absolute;right:2px;top:2px"></div></div></div></div></div>`
      }
    ]
  },
  {
    id: 6,
    title: "Spinner (Dropdown)",
    desc: "Show a dropdown list of options using Spinner with a custom ArrayAdapter.",
    icon: "fas fa-chevron-circle-down",
    color: "#f59e0b",
    category: "Beginner",
    tags: ["Spinner", "ArrayAdapter", "Dropdown"],
    difficulty: "Beginner",
    time: "20 min",
    steps: [
      {
        title: "Add Spinner to layout",
        body: "Place a Spinner in your XML:",
        code: `&lt;Spinner
    android:id="@+id/spinnerCountry"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:layout_margin="24dp" /&gt;`
      },
      {
        title: "Populate with ArrayAdapter",
        body: "Bind a list of items to the Spinner:",
        code: `val countries = listOf("India", "USA", "UK", "Canada", "Australia", "Germany")

val adapter = ArrayAdapter(this, android.R.layout.simple_spinner_item, countries)
adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item)
binding.spinnerCountry.adapter = adapter

binding.spinnerCountry.onItemSelectedListener = object : AdapterView.OnItemSelectedListener {
    override fun onItemSelected(parent: AdapterView&lt;*&gt;, view: View?, pos: Int, id: Long) {
        binding.tvSelected.text = "Selected: \${countries[pos]}"
    }
    override fun onNothingSelected(parent: AdapterView&lt;*&gt;) {}
}`,
        output: `<div style="padding:10px;background:#fff"><div style="font-size:0.6rem;font-weight:700;color:#f59e0b;margin-bottom:8px">🌍 Country Selector</div><div style="border:1.5px solid #f59e0b;border-radius:8px;overflow:hidden"><div style="background:#fffbeb;padding:8px;display:flex;justify-content:space-between;align-items:center"><span style="font-size:0.65rem;color:#333;font-weight:700">Canada</span><span style="font-size:0.6rem;color:#f59e0b">▼</span></div><div style="border-top:1px solid #fde68a"><div style="padding:6px 8px;font-size:0.6rem;color:#888">India</div><div style="padding:6px 8px;font-size:0.6rem;color:#888">USA</div><div style="padding:6px 8px;font-size:0.6rem;color:#333;background:#fffbeb;font-weight:700">Canada ✓</div><div style="padding:6px 8px;font-size:0.6rem;color:#888">Australia</div></div></div><div style="margin-top:8px;font-size:0.6rem;color:#22c55e;background:#f0fdf4;padding:6px;border-radius:6px;text-align:center">Selected: Canada</div></div>`
      }
    ]
  },
  {
    id: 7,
    title: "SeekBar & ProgressBar",
    desc: "Show progress and let users pick a value with SeekBar and ProgressBar widgets.",
    icon: "fas fa-sliders-h",
    color: "#8b5cf6",
    category: "Beginner",
    tags: ["SeekBar", "ProgressBar", "Progress"],
    difficulty: "Beginner",
    time: "20 min",
    steps: [
      {
        title: "Add widgets to layout",
        body: "Place SeekBar and ProgressBar in XML:",
        code: `&lt;LinearLayout
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:orientation="vertical"
    android:padding="24dp"&gt;

    &lt;TextView android:id="@+id/tvVolume"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Volume: 50" android:textSize="18sp" /&gt;

    &lt;SeekBar
        android:id="@+id/seekBar"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:max="100" android:progress="50"
        android:layout_marginTop="8dp" /&gt;

    &lt;ProgressBar
        android:id="@+id/progressBar"
        style="@style/Widget.AppCompat.ProgressBar.Horizontal"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:max="100" android:progress="50"
        android:layout_marginTop="24dp" /&gt;
&lt;/LinearLayout&gt;`
      },
      {
        title: "Handle SeekBar changes",
        body: "Sync SeekBar with ProgressBar and label:",
        code: `binding.seekBar.setOnSeekBarChangeListener(object : SeekBar.OnSeekBarChangeListener {
    override fun onProgressChanged(seekBar: SeekBar, progress: Int, fromUser: Boolean) {
        binding.tvVolume.text = "Volume: \$progress"
        binding.progressBar.progress = progress
    }
    override fun onStartTrackingTouch(seekBar: SeekBar) {}
    override fun onStopTrackingTouch(seekBar: SeekBar) {
        Toast.makeText(this@MainActivity, "Set to \${seekBar.progress}", Toast.LENGTH_SHORT).show()
    }
})`,
        output: `<div style="padding:10px;background:#fff"><div style="font-size:0.6rem;font-weight:700;color:#8b5cf6;margin-bottom:8px">🔊 Volume Control</div><div style="display:flex;flex-direction:column;gap:8px"><div style="font-size:1.2rem;font-weight:900;color:#8b5cf6;text-align:center">75</div><div style="background:#e9d5ff;border-radius:4px;height:6px;position:relative"><div style="background:#8b5cf6;height:6px;border-radius:4px;width:75%"></div><div style="width:16px;height:16px;background:#8b5cf6;border-radius:50%;position:absolute;left:75%;top:50%;transform:translate(-50%,-50%);border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,0.2)"></div></div><div style="background:#f5f3ff;border-radius:8px;overflow:hidden"><div style="background:#8b5cf6;height:8px;width:75%;border-radius:8px"></div></div><div style="font-size:0.6rem;color:#8b5cf6;text-align:center;font-weight:700">Volume: 75%</div></div></div>`
      }
    ]
  },
  {
    id: 8,
    title: "Toast & Snackbar",
    desc: "Show short feedback messages using Toast and interactive Snackbar with actions.",
    icon: "fas fa-comment-alt",
    color: "#f97316",
    category: "Beginner",
    tags: ["Toast", "Snackbar", "Feedback"],
    difficulty: "Beginner",
    time: "15 min",
    steps: [
      {
        title: "Toast — simple one-liner",
        body: "Show a brief message that auto-dismisses:",
        code: `// Short toast
Toast.makeText(this, "Saved successfully!", Toast.LENGTH_SHORT).show()

// Long toast
Toast.makeText(this, "This is a longer message.", Toast.LENGTH_LONG).show()`
      },
      {
        title: "Snackbar — with action",
        body: "Snackbar supports actions and is anchored to a view:",
        code: `// Basic Snackbar
Snackbar.make(binding.root, "Item deleted", Snackbar.LENGTH_SHORT).show()

// With undo action
Snackbar.make(binding.root, "Item deleted", Snackbar.LENGTH_LONG)
    .setAction("Undo") { restoreItem() }
    .setActionTextColor(Color.YELLOW)
    .show()

// Indefinite with retry
Snackbar.make(binding.root, "No internet connection", Snackbar.LENGTH_INDEFINITE)
    .setAction("Retry") { retryConnection() }
    .show()`,
        output: `<div style="padding:10px;background:#fff;position:relative;min-height:120px"><div style="font-size:0.6rem;font-weight:700;color:#f97316;margin-bottom:8px">💬 Feedback Messages</div><div style="background:#333;color:#fff;padding:8px 12px;border-radius:8px;font-size:0.6rem;text-align:center;margin-bottom:8px;opacity:0.9">Saved successfully!</div><div style="position:absolute;bottom:10px;left:10px;right:10px;background:#323232;color:#fff;padding:8px 10px;border-radius:8px;display:flex;justify-content:space-between;align-items:center"><span style="font-size:0.6rem">Item deleted</span><span style="font-size:0.6rem;color:#f59e0b;font-weight:700">UNDO</span></div></div>`
      }
    ]
  },
  {
    id: 9,
    title: "ScrollView & NestedScrollView",
    desc: "Make long content scrollable vertically using ScrollView and NestedScrollView.",
    icon: "fas fa-scroll",
    color: "#14b8a6",
    category: "Beginner",
    tags: ["ScrollView", "NestedScroll", "Layout"],
    difficulty: "Beginner",
    time: "15 min",
    steps: [
      {
        title: "Basic ScrollView",
        body: "Wrap your content — ScrollView can only have one direct child:",
        code: `&lt;ScrollView
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:fillViewport="true"&gt;

    &lt;LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        android:padding="16dp"&gt;

        &lt;TextView android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="@string/long_text" /&gt;

        &lt;ImageView android:layout_width="match_parent"
            android:layout_height="200dp"
            android:scaleType="centerCrop"
            android:src="@drawable/banner" /&gt;
    &lt;/LinearLayout&gt;
&lt;/ScrollView&gt;`
      },
      {
        title: "Scroll programmatically",
        body: "Control scroll position from Kotlin:",
        code: `// Scroll to top
binding.scrollView.smoothScrollTo(0, 0)

// Scroll to bottom
binding.scrollView.post {
    binding.scrollView.fullScroll(ScrollView.FOCUS_DOWN)
}

// Show FAB only when scrolled down
binding.scrollView.viewTreeObserver.addOnScrollChangedListener {
    binding.fabTop.isVisible = binding.scrollView.scrollY > 300
}`
      }
    ]
  },
  {
    id: 10,
    title: "CardView & Material Design",
    desc: "Build beautiful card-based layouts using Material CardView with elevation and ripple.",
    icon: "fas fa-id-card",
    color: "#3b82f6",
    category: "Beginner",
    tags: ["CardView", "Material", "Elevation"],
    difficulty: "Beginner",
    time: "25 min",
    steps: [
      {
        title: "Add Material dependency",
        body: "In build.gradle (app):",
        code: `implementation "com.google.android.material:material:1.11.0"`
      },
      {
        title: "Create a profile card layout",
        body: "Build a rich card with image, text, and action buttons:",
        code: `&lt;com.google.android.material.card.MaterialCardView
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:layout_margin="16dp"
    app:cardCornerRadius="16dp"
    app:cardElevation="8dp"
    app:strokeColor="@color/purple_200"
    app:strokeWidth="1dp"
    android:clickable="true"
    android:focusable="true"&gt;

    &lt;LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical"&gt;

        &lt;ImageView
            android:layout_width="match_parent"
            android:layout_height="180dp"
            android:scaleType="centerCrop"
            android:src="@drawable/profile_banner" /&gt;

        &lt;LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="vertical"
            android:padding="16dp"&gt;

            &lt;TextView android:id="@+id/tvName"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="Alice Johnson"
                android:textSize="20sp"
                android:textStyle="bold" /&gt;

            &lt;TextView android:id="@+id/tvRole"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="Android Developer" /&gt;
        &lt;/LinearLayout&gt;
    &lt;/LinearLayout&gt;
&lt;/com.google.android.material.card.MaterialCardView&gt;`
      },
      {
        title: "Click animation in Kotlin",
        body: "Add a subtle scale animation on card click:",
        code: `binding.card.setOnClickListener {
    it.animate()
        .scaleX(0.97f).scaleY(0.97f).setDuration(100)
        .withEndAction {
            it.animate().scaleX(1f).scaleY(1f).setDuration(100).start()
        }.start()
}`
      }
    ]
  },
  {
    id: 11,
    title: "AlertDialog & DatePicker",
    desc: "Show confirmation dialogs, date pickers, and time pickers for user input.",
    icon: "fas fa-calendar-alt",
    color: "#ef4444",
    category: "Beginner",
    tags: ["AlertDialog", "DatePicker", "TimePicker"],
    difficulty: "Beginner",
    time: "25 min",
    steps: [
      {
        title: "Simple AlertDialog",
        body: "Show a confirmation dialog:",
        code: `MaterialAlertDialogBuilder(this)
    .setTitle("Delete Item")
    .setMessage("Are you sure? This cannot be undone.")
    .setPositiveButton("Delete") { _, _ -> deleteItem() }
    .setNegativeButton("Cancel", null)
    .show()

// Single choice dialog
val options = arrayOf("Option A", "Option B", "Option C")
var selected = 0
MaterialAlertDialogBuilder(this)
    .setTitle("Choose an option")
    .setSingleChoiceItems(options, selected) { _, which -> selected = which }
    .setPositiveButton("OK") { _, _ ->
        Toast.makeText(this, "Chose: \${options[selected]}", Toast.LENGTH_SHORT).show()
    }.show()`
      },
      {
        title: "DatePickerDialog",
        body: "Let users pick a date:",
        code: `fun showDatePicker() {
    val cal = Calendar.getInstance()
    DatePickerDialog(this, { _, y, m, d ->
        binding.tvDate.text = "\$d/\${m + 1}/\$y"
    }, cal.get(Calendar.YEAR), cal.get(Calendar.MONTH), cal.get(Calendar.DAY_OF_MONTH))
        .apply { datePicker.maxDate = System.currentTimeMillis() }
        .show()
}`
      },
      {
        title: "TimePickerDialog",
        body: "Let users pick a time:",
        code: `fun showTimePicker() {
    val cal = Calendar.getInstance()
    TimePickerDialog(this, { _, h, m ->
        val amPm = if (h < 12) "AM" else "PM"
        val h12 = if (h % 12 == 0) 12 else h % 12
        binding.tvTime.text = "\$h12:\${m.toString().padStart(2,'0')} \$amPm"
    }, cal.get(Calendar.HOUR_OF_DAY), cal.get(Calendar.MINUTE), false).show()
}`
      }
    ]
  },
  {
    id: 12,
    title: "Menu & Toolbar",
    desc: "Add an options menu, overflow menu, and a custom Toolbar to your Activity.",
    icon: "fas fa-ellipsis-v",
    color: "#84cc16",
    category: "Beginner",
    tags: ["Toolbar", "Menu", "ActionBar"],
    difficulty: "Beginner",
    time: "25 min",
    steps: [
      {
        title: "Create menu resource (res/menu/main_menu.xml)",
        body: "Define menu items:",
        code: `&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;menu xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"&gt;
    &lt;item android:id="@+id/action_search"
        android:icon="@drawable/ic_search"
        android:title="Search"
        app:showAsAction="ifRoom" /&gt;
    &lt;item android:id="@+id/action_settings"
        android:title="Settings"
        app:showAsAction="never" /&gt;
&lt;/menu&gt;`
      },
      {
        title: "Custom Toolbar in layout",
        body: "Replace the default ActionBar with MaterialToolbar:",
        code: `&lt;com.google.android.material.appbar.MaterialToolbar
    android:id="@+id/toolbar"
    android:layout_width="match_parent"
    android:layout_height="?attr/actionBarSize"
    android:background="?attr/colorPrimary"
    app:title="My App"
    app:titleTextColor="@android:color/white" /&gt;`
      },
      {
        title: "Inflate and handle menu in Activity",
        body: "Set up Toolbar and respond to menu clicks:",
        code: `class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        setSupportActionBar(binding.toolbar)
    }

    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        menuInflater.inflate(R.menu.main_menu, menu)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem) = when (item.itemId) {
        R.id.action_search   -> { openSearch(); true }
        R.id.action_settings -> { openSettings(); true }
        else -> super.onOptionsItemSelected(item)
    }
}`
      }
    ]
  }
];

// Merge into global allExamples after data.js runs
if (typeof allExamples !== 'undefined') {
  allExamples.push(...beginnerExamples);
  allExamples.sort((a, b) => a.id - b.id);
}
