with open("src/pages/Home.jsx", "r", encoding="utf-8") as f:
    content = f.read()

old_snippet = """      <section className="section section--white" id="core-modules">
        <div className="container">
          <div className="section-header">
            <h2>Everything your school needs. Nothing it doesn't.</h2>"""

new_snippet = """      <section className="section section--white" id="core-modules">
        <div className="container">
          <div className="section-header core-modules-header">
            <h2>Everything your school needs. Nothing it doesn't.</h2>"""

if old_snippet in content:
    content = content.replace(old_snippet, new_snippet, 1)
    with open("src/pages/Home.jsx", "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated Home.jsx successfully!")
else:
    print("Could not find old_snippet in Home.jsx")
