with open("src/index.css", "r", encoding="utf-8") as f:
    css = f.read()

target = """.section-header p {
  font-size: 1.125rem;
  color: var(--color-slate-600);
}"""

replacement = """.section-header p {
  font-size: 1.125rem;
  color: var(--color-slate-600);
}

.core-modules-header {
  max-width: 1100px;
}

.core-modules-header h2 {
  font-size: clamp(1.4rem, 2.75vw, 2.35rem);
  white-space: nowrap;
}

@media (max-width: 768px) {
  .core-modules-header h2 {
    white-space: normal;
    font-size: clamp(1.35rem, 5.5vw, 1.85rem);
  }
}"""

if target in css:
    css = css.replace(target, replacement, 1)
    with open("src/index.css", "w", encoding="utf-8") as f:
        f.write(css)
    print("Added .core-modules-header to index.css successfully!")
else:
    print("Could not find target in index.css")
