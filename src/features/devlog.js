
export function showDevLog({
    app,
    displayHeader,
    hookHeaderButtons,
    setActiveButton,
    displayFooter
}) {
    app.innerHTML = `
        <main class="app-shell">
        ${displayHeader()}
    
        <section class="tool-card">
          <p><strong>Development Log</strong></p>
          
          <section class="tool-card">
            <section class="tool-card-dlog"> <!-- Section intentionally left unclosed because I happen to like how the sections look when its stacked like this. -->
              <p><strong>build-0.1.2</strong></p>
              <p>• Added active-state logic to show the current navigation page.</p>
              <p>• Added back Lore Vault button and extra redundant header buttons to ease navigation.</p>
              <p>• Renamed <code>pushDataToPage()</code> to <code>renderCharacters()</code> and removed abstraction
              <p>• Added persistent Places CRUD with Markdown support.</p>
              <p>• Refactored Character code into its own module, helping my eyes because scrolling sucks </p>
              <p>• Refactored Devlog into its own module too. Ironically it also serves as an example structure for future modules. </p>

              <hr class=card-custom-divider>
            <section class="tool-card-dlog">
              <p><strong>build-0.1.1</strong></p>
              <p>• Added the beginnings of a Settings page with a lil button</p>
              <p>• Reorganized the Lore Vault Navigation with a dedicated World Building Section</p>
              <p>• Moved header components into a separate module to clean up <code>main.js</code></p>
              <p>• Added some customization to certain pages that were lacking it
              <div class="todo"><strong>TODO:</strong> Remake header to make navigation not completely arse.</div>
            </section>
            <section class="tool-card-dlog">
              <p><strong>build-0.1.0 (Character Page Milestone)</strong></p>
              <p>• Settled on "Quillworks" as the final project name
              <p>• Added a confirmation dialogue upon deletion of a character</p>
              <p>• Added an empty state message for <code>Characters</code> page</p>
              <p>• Like a goober, I've lightly versioned the Characters page in the very bottom middle.</p>
              <p>• Added <code>Markdown</code> support. I have extra modules but none are implemented outside of the basic version.
            </section>
    
            <section class="tool-card-dlog">
              <p><strong>build-0.0.2</strong></p>
              <p>• Fully removed the deprecated <code>charSubmit()</code></p>
              <p>• Added persistent character storage</p>
              <p>• Delete Button now deletes characters. No "are you sure?" prompt yet</p>
              <p>• Edit Button now refills the form and updates the existing character</p>
              <p>• Editing a character will auto-scroll to the form</p>
              <p>• Saving or updating a character automagically scrolls to its card</p>
              <p>• Split character storage functions into <code>characterStorage.js</code></p>
            </section>
    
            <section class="tool-card-dlog">
              <p><strong>build-0.0.1</strong></p>
              <p>• Put together the basic framework.</p>
              <p>• Got page navigation working.</p>
              <p>• Characters can now be created and stored.</p>
              <p>• Character cards finally look like... well, cards.</p>
              <p>• Learned map(), index, and why event listeners should behave themselves.</p>
              <p>• Fixed a performance issue that was entirely my own fault.</p>
              <p>• Added build information to the footer.</p>
              <p>• Calling this a solid first milestone.</p>
              <p>• Oh! And also added a lil devlog page.</p>
            </section>
    
        </section>
        ${displayFooter()}
        </main>
      `
      hookHeaderButtons()
      setActiveButton('devlog-button')
}