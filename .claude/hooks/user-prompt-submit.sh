#!/bin/bash

# Claude Code UserPromptSubmit hook to inject CLAUDE.md content
# This ensures Claude always reads the project guidelines before processing prompts

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
PROJECT_ROOT="$(dirname "$(dirname "$SCRIPT_DIR")")"
CLAUDE_MD_PATH="$PROJECT_ROOT/CLAUDE.md"

# Read the CLAUDE.md file
if [ -f "$CLAUDE_MD_PATH" ]; then
  CLAUDE_MD_CONTENT=$(cat "$CLAUDE_MD_PATH")
else
  # If CLAUDE.md doesn't exist, exit successfully without adding context
  exit 0
fi

# Output JSON with additional context
cat <<EOF
{
  "decision": null,
  "hookSpecificOutput": {
    "hookEventName": "UserPromptSubmit",
    "additionalContext": "📋 Project Guidelines (CLAUDE.md):\n\n$CLAUDE_MD_CONTENT"
  }
}
EOF

exit 0