# Substituir titulo da aplicação
sed -i 's/<title>Vite + React + TS<\/title>/<title>Projeto<\/title>/' index.html

# Apagar arquivos App.css, index.css e /assets/react.svg
rm -rf src/App.css src/index.css e src/assets/react.svg

# Apagar referência ao favicon
sed -i '/<link rel="icon" type="image\/svg\+xml" href="\/vite.svg" \/>/d' index.html

# Apagar referência ao index.css
sed -i "/import '\.\/index.css'/d" src/main.tsx

# Apagar App.tsx
rm -rf src/App.tsx

# Criar App.tsx limpo
cat << 'EOF' > src/App.tsx
import { useState } from 'react'

function App() {

  return (
    <>
    <h1>Agora sim!</h1>
    </>
  )
}

export default App
EOF


