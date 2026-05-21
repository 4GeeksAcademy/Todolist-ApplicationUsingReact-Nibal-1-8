# TODO List Application - React

✨ **A beautiful, minimalist TODO list app built with React and Tailwind CSS**

## 🎯 Features

✅ **Add TODOs** - Type in the input and press Enter  
✅ **Delete TODOs** - Hover over any item to see the X button  
✅ **Mark Complete** - Click the checkbox to toggle completion  
✅ **Line-through effect** - Completed items show with strikethrough  
✅ **Dynamic Counter** - Shows "X items left" at the bottom  
✅ **Auto-updates** - Counter updates when you add/delete/complete  
✅ **Persistent Storage** - TODOs saved in localStorage  
✅ **Smooth Animations** - Beautiful hover and transition effects  
✅ **Responsive Design** - Works on mobile, tablet, and desktop  

## 🚀 Installation

```bash
# Clean install
rm -rf node_modules package-lock.json

# Install dependencies
npm install

# Start dev server
npm start
```

The app opens at **http://localhost:3000** 🎉

## 💡 How to Use

1. **Add a TODO** - Type in the input field and press Enter
2. **Complete a TODO** - Click the checkbox to mark it done
3. **Delete a TODO** - Hover over the item and click the X button
4. **Track Progress** - Check the counter at the bottom left
5. **Refresh** - Your todos persist even after closing the browser!

## 🎨 Design Features

- Minimalist light gray aesthetic
- Clean white card with shadow
- Smooth hover effects
- X button appears on hover (right side)
- Dynamic counter updates in real-time
- Elegant animations and transitions
- Professional typography

## 📦 Tech Stack

- **React 18** - UI Framework
- **Vite** - Build tool (fast!)
- **Tailwind CSS** - Styling
- **LocalStorage** - Data persistence
- **Font Awesome** - Icons

## 📂 Project Structure

```
src/
├── main.jsx              # Entry point
├── App.jsx               # Main app component
└── components/
    └── TodoList.jsx      # TodoList component with all logic
```

## ✨ Features Breakdown

### Add Todos
- Type in the "What needs to be done?" field
- Press Enter to add
- Input clears automatically

### Delete Todos
- Hover over any todo item
- X button appears on the right
- Click X to remove the item
- Counter automatically updates

### Mark Complete
- Click the checkbox to mark as done
- Text shows strikethrough and becomes gray
- Counter updates to reflect remaining items

### Counter
- Located at bottom left
- Shows "X items left"
- Updates in real-time
- Only counts incomplete items

## 💾 Data Persistence

All todos are automatically saved to browser localStorage. Your todos will be there when you:
- Refresh the page
- Close and reopen the browser
- Come back later

## 🎯 Next Steps / Features to Add

- [ ] Edit existing todos
- [ ] Filter (All, Active, Completed)
- [ ] Clear all completed
- [ ] Drag and drop to reorder
- [ ] Due dates
- [ ] Categories/tags
- [ ] Priority levels
- [ ] Dark mode

---

**Made with ❤️ using React + Tailwind CSS**

Enjoy your TODO list! 🚀