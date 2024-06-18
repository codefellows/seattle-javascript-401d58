export function castVote(candidate) {
  return {
    type: "VOTE",
    payload: candidate
  }
}

export function reset() {
  return {
    type: "RESET"
  }
}

export function disable(candidate) {
  return {
    type: "DISABLE",
    payload: candidate
  }
}

